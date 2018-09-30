import { LIB_MAKE_KEY } from 'src/constants/metaData';

/**
 * Generates camera make from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera make.
 */
export default function getMake(fileMetaData) {
  return fileMetaData[LIB_MAKE_KEY] || '';
}
