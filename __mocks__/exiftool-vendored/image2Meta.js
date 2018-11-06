import {
  EXIF_JPG_ORIGINAL_DATE_KEY,
  EXIF_JPG_RESOLUTION,
} from 'src/constants/metaData';

const exifDate = '2000:02:02 02:00:00';

export default {
  [EXIF_JPG_RESOLUTION]: '2x2',
  [EXIF_JPG_ORIGINAL_DATE_KEY]: exifDate,
};
