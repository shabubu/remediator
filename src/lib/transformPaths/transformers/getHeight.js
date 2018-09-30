import { LIB_HEIGHT_KEY } from 'src/constants/metaData';

/**
 * Generates pixel height from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns pixel height of file.
 */
export default function getHeight(fileMetaData) {
  return fileMetaData[LIB_HEIGHT_KEY];
}
