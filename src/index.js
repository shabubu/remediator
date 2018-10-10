import buildConfig from 'src/lib/buildConfig';
import { getFilesFromDirectories } from 'src/lib/fsHelpers';
import {
  RECURSIVE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import transformPaths from 'src/lib/transformPaths';

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

  return results;
}
