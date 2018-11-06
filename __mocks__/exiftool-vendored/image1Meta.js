import {
  EXIF_JPG_CREATE_DATE_KEY,
  EXIF_JPG_DEVICE_MAKE_KEY,
  EXIF_JPG_DEVICE_MODEL_KEY,
  EXIF_JPG_MODIFY_DATE_KEY,
  EXIF_JPG_ORIENTATION_KEY,
  EXIF_JPG_ORIGINAL_DATE_KEY,
  EXIF_JPG_RESOLUTION,
} from 'src/constants/metaData';

const exifDate = '2000-01-01 01:00:00';

export default {
  [EXIF_JPG_DEVICE_MAKE_KEY]: 'A Camera Maker',
  [EXIF_JPG_DEVICE_MODEL_KEY]: 'A Camera Model',
  [EXIF_JPG_ORIENTATION_KEY]: 'Horizontal (normal)',
  [EXIF_JPG_RESOLUTION]: '1x1',
  [EXIF_JPG_CREATE_DATE_KEY]: exifDate,
  [EXIF_JPG_ORIGINAL_DATE_KEY]: exifDate,
  [EXIF_JPG_MODIFY_DATE_KEY]: exifDate,
};
