import getStringMonth from 'src/lib/transformPaths/transformers/getStringMonth';

/**
 * Generates string uppercase month from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns string version of month in all uppercase.
 */
export default function getStringMonthUppercase(fileMetaData) {
  return getStringMonth(fileMetaData).toUpperCase();
}
