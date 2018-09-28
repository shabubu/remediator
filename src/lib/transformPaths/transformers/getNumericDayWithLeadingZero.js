import getNumericDay from 'src/lib/transformPaths/transformers/getNumericDay';
import { prependZero } from 'src/lib/util';

/**
 *  Generates numeric day with leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric day of month with leading zero.
 */
export default function getNumericDayWithLeadingZero(fileMetaData) {
  return prependZero(getNumericDay(fileMetaData));
}
