import {
  ATIME_KEY,
  BIRTHTIME_KEY,
  CTIME_KEY,
  EXIF_JPG_CREATE_DATE_KEY,
  EXIF_JPG_MODIFY_DATE_KEY,
  EXIF_JPG_ORIGINAL_DATE_KEY,
  MTIME_KEY,
} from 'src/constants/metaData';
import getOldestTimestamp from 'src/lib/getFilesMetaData/getOldestTimestamp';

const validExifDate = '2000-01-01 01:00:00';
const validExifTime = 946717200000;

describe('src/lib/getFilesMetaData/determineOldestDate', () => {
  test('should return oldest date from file system dates', () => {
    const fsDates = {
      [ATIME_KEY]: 1,
      [BIRTHTIME_KEY]: 2,
      [CTIME_KEY]: 3,
      [MTIME_KEY]: 4,
    };
    const exifDates = {
      [EXIF_JPG_ORIGINAL_DATE_KEY]: validExifDate,
      [EXIF_JPG_MODIFY_DATE_KEY]: validExifDate,
      [EXIF_JPG_CREATE_DATE_KEY]: validExifDate,
    };
    const expected = 1;
    const result = getOldestTimestamp(fsDates, exifDates);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return oldest date from exiftool date', () => {
    const fsDates = {
      [ATIME_KEY]: validExifTime + 1,
      [BIRTHTIME_KEY]: validExifTime + 2,
      [CTIME_KEY]: validExifTime + 3,
      [MTIME_KEY]: validExifTime + 4,
    };
    const exifDates = {
      [EXIF_JPG_ORIGINAL_DATE_KEY]: validExifDate,
    };
    const expected = validExifTime;
    const result = getOldestTimestamp(fsDates, exifDates);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
