import { ALL_EXIF_KEYS } from 'src/constants/metaData';
import { getExifToolInstance } from 'src/lib/exifTool';

/**
 * Fetches the exif keys for file that remediator requires.
 * @param {string} filePath File to retrieve values for.
 * @returns {object}
 * @async
 */
export default async function getExifToolMetaData(filePath) {
  const exifTool = await getExifToolInstance();
  const { data } = await exifTool.readMetadata(filePath, ALL_EXIF_KEYS);

  return data[0];
}
