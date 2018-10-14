import buildConfig from 'src/lib/buildConfig';
import {
  copyFile,
  getFilesFromDirectories,
  moveFile,
} from 'src/lib/fsHelpers';
import {
  BATCH_SIZE_KEY,
  MODE_COPY,
  MODE_DRY,
  MODE_KEY,
  RECURSIVE_KEY,
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import transformPaths from 'src/lib/transformPaths';
import { chunkArray } from 'src/lib/util';

/**
 * Reorganizes media files based off meta data.
 * @param    {object}  options Remediator options object.
 * @returns  {Promise}
 * @resolves {Array}           Resolves array of transformed file objects.
 */
export default async function remediator(options = {}) {
  const config = await buildConfig(options);
  const sourceFiles = await getFilesFromDirectories(
    config[SOURCE_DIRECTORIES_KEY],
    config[RECURSIVE_KEY],
  );
  const results = await transformPaths(config, sourceFiles);
  const resultChunks = chunkArray(results, config[BATCH_SIZE_KEY]);

  // if we are in any mode that isn't dry we should perform filesystem actions.
  if (config[MODE_KEY] !== MODE_DRY) {
    const fsAction = config[MODE_KEY] === MODE_COPY ? copyFile : moveFile;
    const fsPromises = [];

    // loop synchronously over chunks to honor batch size
    for (let chunkKey = 0; chunkKey < resultChunks.length; chunkKey += 1) {
      resultChunks[chunkKey].forEach(
        (transformed, resultIndex) => fsPromises.push(new Promise((resolve, reject) => {
          if (!transformed[RETURN_DATA_ERROR_KEY]) {
            fsAction(transformed[RETURN_DATA_SOURCE_KEY], transformed[RETURN_DATA_OUTPUT_KEY])
              .then(resolve)
              .catch((err) => {
                if (config[SKIP_ERRORS_KEY]) {
                  // compute the key to update in original results
                  const key = (chunkKey * config[BATCH_SIZE_KEY]) + resultIndex;
                  results[key] = {
                    ...results[key],
                    [RETURN_DATA_ERROR_KEY]: err,
                  };

                  resolve();
                } else {
                  reject(err);
                }
              });
          } else {
            resolve();
          }
        })),
      );
      // specifically await on a per batch basis
      /* eslint-disable no-await-in-loop */
      await Promise.all(fsPromises);
      /* eslint-enable no-await-in-loop */

      // clear array for next chunk
      fsPromises.length = 0;
    }
  }

  return results;
}
