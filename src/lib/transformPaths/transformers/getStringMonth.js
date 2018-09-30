import getNumericMonth from 'src/lib/transformPaths/transformers/getNumericMonth';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Generates string month from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns string version of month.
 */
export default function getStringMonth(fileMetaData) {
  const numericMonth = getNumericMonth(fileMetaData);

  return MONTHS[numericMonth - 1];
}
