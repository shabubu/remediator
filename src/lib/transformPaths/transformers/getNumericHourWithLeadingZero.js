import getNumericHour from 'src/lib/transformPaths/transformers/getNumericHour';
import { prependZero } from 'src/lib/util';

/**
 * Generates numeric hour with leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric hour with leading zero.
 */
export default function getNumericHourWithLeadingZero(fileMetaData) {
  return prependZero(getNumericHour(fileMetaData));
}
