import getNumericMonth from 'src/lib/transformPaths/transformers/getNumericMonth';
import { prependZero } from 'src/lib/util';

/**
 * Generates numeric month with leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns 2 digit numeric month.
 */
export default function getNumericMonthWithLeadingZero(fileMetaData) {
  return prependZero(getNumericMonth(fileMetaData));
}
