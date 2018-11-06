import {
  EXIF_JPG_ORIGINAL_DATE_KEY,
  EXIF_JPG_RESOLUTION,
} from 'src/constants/metaData';

const exifDate = '2000:06:06 06:00:00';

export default {
  [EXIF_JPG_RESOLUTION]: '6x6',
  [EXIF_JPG_ORIGINAL_DATE_KEY]: exifDate,
};
