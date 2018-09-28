import {
  ATIME_KEY,
  BIRTHTIME_KEY,
  CTIME_KEY,
  EXIF_JPG_CREATE_DATE_KEY,
  EXIF_JPG_MODIFY_DATE_KEY,
  EXIF_JPG_ORIGINAL_DATE_KEY,
  MTIME_KEY,
} from 'src/constants/metaData';

const fsDateKeys = [
  ATIME_KEY,
  BIRTHTIME_KEY,
  CTIME_KEY,
  MTIME_KEY,
];
const exifDateKeys = [
  EXIF_JPG_CREATE_DATE_KEY,
  EXIF_JPG_ORIGINAL_DATE_KEY,
  EXIF_JPG_MODIFY_DATE_KEY,
];

/**
 * Determines the earliest timestamp from supported exif and fs dates/timestamps.
 * @param   {object} fsDates   Object of fs timestamps.
 * @param   {object} exifDates Object of exifdate keys and values.
 * @returns {number}           Oldest in ms.
 */
export default function getOldestTimestamp(fsDates, exifDates) {
  const msDates = [];

  // fs dates should be numerics already, just neeed to bundle them into array
  fsDateKeys.forEach(key => msDates.push(fsDates[key]));

  // convert exif date values into numeric and add to
  exifDateKeys.forEach((key) => {
    const value = exifDates[key];

    if (value) {
      const pieces = value.split(' ');
      const dateString = pieces[0].replace(':', '-');

      msDates.push(
        new Date(`${dateString} ${pieces[1]}`).getTime(),
      );
    }
  });

  return Math.min(...msDates);
}
