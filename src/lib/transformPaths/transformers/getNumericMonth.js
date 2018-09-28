import { LIB_DATE_KEY } from 'src/constants/metaData';

/**
 * Generates numeric month without leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric month representation.
 */
export default function getNumericMonth(fileMetaData) {
  return fileMetaData[LIB_DATE_KEY].getMonth() + 1;
}
