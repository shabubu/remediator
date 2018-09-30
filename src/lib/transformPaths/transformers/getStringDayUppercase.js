import getStringDay from 'src/lib/transformPaths/transformers/getStringDay';

/**
 * Generates string uppercase day from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns string version of day in all uppercase.
 */
export default function getStringDayUppercase(fileMetaData) {
  return getStringDay(fileMetaData).toUpperCase();
}
