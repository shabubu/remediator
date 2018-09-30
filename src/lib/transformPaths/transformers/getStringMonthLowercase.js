import getStringMonth from 'src/lib/transformPaths/transformers/getStringMonth';

/**
 * Generates string lowercase month from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns string version of month in all lowercase.
 */
export default function getStringMonthLowercase(fileMetaData) {
  return getStringMonth(fileMetaData).toLowerCase();
}
