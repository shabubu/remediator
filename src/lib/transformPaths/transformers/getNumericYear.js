import { LIB_DATE_KEY } from 'src/constants/metaData';

/**
 * Generates numeric year from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns 4 digit numeric year.
 */
export default function getNumericYear(fileMetaData) {
  return fileMetaData[LIB_DATE_KEY].getFullYear();
}
