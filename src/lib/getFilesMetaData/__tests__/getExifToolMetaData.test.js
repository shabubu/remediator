import path from 'path';
import {
  EXIF_JPG_CREATE_DATE_KEY,
  EXIF_JPG_DEVICE_MAKE_KEY,
  EXIF_JPG_DEVICE_MODEL_KEY,
  EXIF_JPG_MODIFY_DATE_KEY,
  EXIF_JPG_ORIENTATION_KEY,
  EXIF_JPG_ORIGINAL_DATE_KEY,
  EXIF_JPG_RESOLUTION,
} from 'src/constants/metaData';
import {
  closeExifToolProcess,
  openExifToolProcess,
} from 'src/lib/exifTool';
import getExifToolMetaData from 'src/lib/getFilesMetaData/getExifToolMetaData';

describe('src/lib/getFilesMetaData/getExifToolMetaData', () => {
  // setup and tear down exiftool process for test(s)
  beforeAll(done => openExifToolProcess().then(() => done()));
  afterAll(done => closeExifToolProcess().then(() => done()));

  test('should return object with metadata', () => {
    const filePath = path.resolve('./testAssets/1.jpg');
    const result = getExifToolMetaData(filePath);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expect.objectContaining({
        [EXIF_JPG_CREATE_DATE_KEY]: expect.any(String),
        [EXIF_JPG_DEVICE_MAKE_KEY]: expect.any(String),
        [EXIF_JPG_DEVICE_MODEL_KEY]: expect.any(String),
        [EXIF_JPG_MODIFY_DATE_KEY]: expect.any(String),
        [EXIF_JPG_ORIENTATION_KEY]: expect.any(String),
        [EXIF_JPG_ORIGINAL_DATE_KEY]: expect.any(String),
        [EXIF_JPG_RESOLUTION]: expect.any(String),
      }));
  });
});
