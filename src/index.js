import buildConfig from 'src/lib/buildConfig';
import { getFilesFromDirectories } from 'src/lib/fsHelpers';
import {
  RECURSIVE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';

/**
 * Reorganizes media files based off meta data.
 * @param    {object}  options Remediator options object.
 * @returns  {Promise}
 * @resolves {Array}           Resolves array of source files (temporary).
 */
export default async function remediator(options = {}) {
  const config = await buildConfig(options);
  const sourceFiles = await getFilesFromDirectories(
    config[SOURCE_DIRECTORIES_KEY],
    config[RECURSIVE_KEY],
  );

  return sourceFiles;
}
