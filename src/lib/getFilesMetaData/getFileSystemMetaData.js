import {
  ATIME_KEY,
  BIRTHTIME_KEY,
  CTIME_KEY,
  MTIME_KEY,
} from 'src/constants/metaData';
import { getFileStats } from 'src/lib/fsHelpers';

/**
 * Gets the time values from fs stats for file.
 * @param   {string} filePath File to retrieve values for.
 * @returns {object}          Object full of fs time values.
 * @async
 */
export default async function getFileSystemMetaData(filePath) {
  const fileStats = await getFileStats(filePath);

  return {
    [ATIME_KEY]: fileStats[ATIME_KEY],
    [BIRTHTIME_KEY]: fileStats[BIRTHTIME_KEY],
    [CTIME_KEY]: fileStats[CTIME_KEY],
    [MTIME_KEY]: fileStats[MTIME_KEY],
  };
}
