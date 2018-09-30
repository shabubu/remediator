import path from 'path';
import { SKIP_ERRORS_KEY } from 'src/constants';
import {
  LIB_DATE_KEY,
  LIB_ERROR_KEY,
  LIB_HEIGHT_KEY,
  LIB_MAKE_KEY,
  LIB_MODEL_KEY,
  LIB_ORIENTATION_KEY,
  LIB_ORIGINAL_FILE_PATH,
  LIB_WIDTH_KEY,
} from 'src/constants/metaData';
import {
  closeExifToolProcess,
  openExifToolProcess,
} from 'src/lib/exifTool';
import getFileMetaData from 'src/lib/getFilesMetaData/getFileMetaData';

describe('src/lib/getFilesMetaData/getFileMetaData', () => {
  // setup and tear down exiftool process for test(s)
  beforeAll(done => openExifToolProcess().then(() => done()));
  afterAll(done => closeExifToolProcess().then(() => done()));

  test('should resolve object of metadata for a media file', () => {
    const config = {};
    const filePath = path.resolve('./testAssets/1.jpg');
    const expected = {
      [LIB_DATE_KEY]: new Date(946717200000),
      [LIB_HEIGHT_KEY]: '1',
      [LIB_WIDTH_KEY]: '1',
      [LIB_MODEL_KEY]: 'A Camera Model',
      [LIB_MAKE_KEY]: 'A Camera Maker',
      [LIB_ORIGINAL_FILE_PATH]: filePath,
      [LIB_ORIENTATION_KEY]: 'Horizontal (normal)',
    };
    const result = getFileMetaData(config, filePath);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });

  test('should resolve error when skip errors is true', () => {
    const config = {
      [SKIP_ERRORS_KEY]: true,
    };
    const filePath = path.resolve('./testAssets/notAFile.jpg');
    const expected = {
      [LIB_ERROR_KEY]: expect.anything(),
    };
    const result = getFileMetaData(config, filePath);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });

  test('should throw if error encountered', () => {
    const config = {};
    const filePath = path.resolve('./testAssets/notAFile.jpg');
    const result = getFileMetaData(config, filePath);

    expect.assertions(1);
    return expect(result)
      .rejects
      .toThrow();
  });
});
