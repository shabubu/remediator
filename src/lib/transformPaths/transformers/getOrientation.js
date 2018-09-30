import { LIB_ORIENTATION_KEY } from 'src/constants/metaData';

/**
 * Generates camera orientation from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera orientation.
 */
export default function getOrientation(fileMetaData) {
  return fileMetaData[LIB_ORIENTATION_KEY] || '';
}
