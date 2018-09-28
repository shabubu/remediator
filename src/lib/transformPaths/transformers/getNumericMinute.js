import { LIB_DATE_KEY } from 'src/constants/metaData';

/**
 * Generates numeric minute without leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric minute without leading zero.
 */
export default function getNumericMinute(fileMetaData) {
  return fileMetaData[LIB_DATE_KEY].getMinutes();
}
