import { exiftool } from 'exiftool-vendored';
import path from 'path';
import { EXIFTOOL_KEY } from 'src/constants';
import {
  EXIF_JPG_CREATE_DATE_KEY,
  EXIF_JPG_DEVICE_MAKE_KEY,
  EXIF_JPG_DEVICE_MODEL_KEY,
  EXIF_JPG_MODIFY_DATE_KEY,
  EXIF_JPG_ORIENTATION_KEY,
  EXIF_JPG_ORIGINAL_DATE_KEY,
  EXIF_JPG_RESOLUTION,
} from 'src/constants/metaData';
import getExifToolMetaData from 'src/lib/getFilesMetaData/getExifToolMetaData';

describe('src/lib/getFilesMetaData/getExifToolMetaData', () => {
  test('should return object with metadata', () => {
    const config = {
      [EXIFTOOL_KEY]: exiftool,
    };
    const filePath = path.resolve('./testAssets/1.jpg');
    const result = getExifToolMetaData(config, filePath);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expect.objectContaining({
        [EXIF_JPG_CREATE_DATE_KEY]: expect.anything(),
        [EXIF_JPG_DEVICE_MAKE_KEY]: expect.anything(),
        [EXIF_JPG_DEVICE_MODEL_KEY]: expect.anything(),
        [EXIF_JPG_MODIFY_DATE_KEY]: expect.anything(),
        [EXIF_JPG_ORIENTATION_KEY]: expect.anything(),
        [EXIF_JPG_ORIGINAL_DATE_KEY]: expect.anything(),
        [EXIF_JPG_RESOLUTION]: expect.anything(),
      }));
  });
});
