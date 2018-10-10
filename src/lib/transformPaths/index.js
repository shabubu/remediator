import { BATCH_SIZE_KEY } from 'src/constants';
import {
  closeExifToolProcess,
  openExifToolProcess,
} from 'src/lib/exifTool';
import getFilesMetaData from 'src/lib/getFilesMetaData';
import checkAndSetUniqueOutputPaths from 'src/lib/transformPaths/checkAndSetUniqueOutputPaths';
import transformPathsFromMetaData from 'src/lib/transformPaths/transformPathsFromMetaData';
import { chunkArray } from 'src/lib/util';

/**
 * Builds transformed strings for each source file.
 * @param    {object} config      Remediator config object.
 * @param    {Array}  sourceFiles Files to to transform.
 * @returns  {Promise}
 * @resolves {Array}              Resolves array of remediator return objects.
 */
export default async function transformPaths(config, sourceFiles) {
  let allTransformedFiles = [];
  const filesChunks = chunkArray(sourceFiles, config[BATCH_SIZE_KEY]);

  await openExifToolProcess();

  // loop synchronously over chunks to honor batch sizes
  for (let chunkKey = 0; chunkKey < filesChunks.length; chunkKey += 1) {
    const chunkFiles = filesChunks[chunkKey];
    /* eslint-disable no-await-in-loop */
    // we want to intentionally run chunks synchronously to honor batch size config
    const filesMeta = await getFilesMetaData(config, chunkFiles);
    /* eslint-enable no-await-in-loop */
    const transformedPaths = transformPathsFromMetaData(config, filesMeta);

    allTransformedFiles = allTransformedFiles.concat(transformedPaths);
  }

  await closeExifToolProcess();

  return checkAndSetUniqueOutputPaths(allTransformedFiles);
}
