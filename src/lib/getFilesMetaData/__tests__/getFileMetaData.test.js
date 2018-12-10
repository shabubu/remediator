import { exiftool } from 'exiftool-vendored';
import path from 'path';
import {
  EXIFTOOL_KEY,
  SKIP_ERRORS_KEY,
} from 'src/constants/config';
import {
  LIB_DATE_KEY,
  LIB_ERROR_KEY,
  LIB_MAKE_KEY,
  LIB_MODEL_KEY,
  LIB_ORIENTATION_KEY,
  LIB_ORIGINAL_FILE_PATH,
  LIB_RESOLUTION_KEY,
} from 'src/constants/metaData';
import getFileMetaData from 'src/lib/getFilesMetaData/getFileMetaData';

describe('src/lib/getFilesMetaData/getFileMetaData', () => {
  test('should resolve object of metadata for a media file', () => {
    const config = {
      [EXIFTOOL_KEY]: exiftool,
    };
    const filePath = path.resolve('./testAssets/1.jpg');
    const expected = {
      [LIB_DATE_KEY]: new Date(946717200000),
      [LIB_RESOLUTION_KEY]: '1x1',
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
      [LIB_ORIGINAL_FILE_PATH]: filePath,
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
