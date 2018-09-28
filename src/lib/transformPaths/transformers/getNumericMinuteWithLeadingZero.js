import getNumericMinute from 'src/lib/transformPaths/transformers/getNumericMinute';
import { prependZero } from 'src/lib/util';

/**
 * Generates numeric minute with leading zero from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns numeric minute with leading zero.
 */
export default function getNumericMinuteWithLeadingZero(fileMetaData) {
  return prependZero(getNumericMinute(fileMetaData));
}
