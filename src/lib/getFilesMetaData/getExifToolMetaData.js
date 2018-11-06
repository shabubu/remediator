import { exiftool } from 'exiftool-vendored';
import { ALL_EXIF_KEYS } from 'src/constants/metaData';

/**
 * Fetches the exif keys for file that remediator requires.
 * @param {string} filePath File to retrieve values for.
 * @returns {object}
 * @async
 */
export default async function getExifToolMetaData(filePath) {
  const returnData = {};
  const tags = await exiftool.read(filePath, ALL_EXIF_KEYS);

  ALL_EXIF_KEYS.forEach((key) => {
    returnData[key] = tags[key];
  });

  return returnData;
}
