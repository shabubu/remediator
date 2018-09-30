import { LIB_WIDTH_KEY } from 'src/constants/metaData';

/**
 * Generates pixel width from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns pixel width of file.
 */
export default function getWidth(fileMetaData) {
  return fileMetaData[LIB_WIDTH_KEY];
}
