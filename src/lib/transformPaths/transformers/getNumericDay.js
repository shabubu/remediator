import { LIB_DATE_KEY } from 'src/constants/metaData';

/**
 * Generates numeric day from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric day of month.
 */
export default function getNumericDay(fileMetaData) {
  return fileMetaData[LIB_DATE_KEY].getDate();
}
