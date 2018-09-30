import { LIB_DATE_KEY } from 'src/constants/metaData';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * Generates string day of the week from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns string version of day of week.
 */
export default function getStringDay(fileMetaData) {
  const numericWeekDay = fileMetaData[LIB_DATE_KEY].getDay();

  return DAYS[numericWeekDay];
}
