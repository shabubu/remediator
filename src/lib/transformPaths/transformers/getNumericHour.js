import { LIB_DATE_KEY } from 'src/constants/metaData';

/**
 * Generates numeric hour without leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric hour without leading zero.
 */
export default function getNumericHour(fileMetaData) {
  return fileMetaData[LIB_DATE_KEY].getHours();
}
