import getStringDay from 'src/lib/transformPaths/transformers/getStringDay';

/**
 * Generates string lowercase day from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns string version of day in all lowercase.
 */
export default function getStringDayLowercase(fileMetaData) {
  return getStringDay(fileMetaData).toLowerCase();
}
