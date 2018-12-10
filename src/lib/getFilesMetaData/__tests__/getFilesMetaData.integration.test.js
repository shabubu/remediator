import { exiftool } from 'exiftool-vendored';
import path from 'path';
import { EXIFTOOL_KEY } from 'src/constants';
import {
  LIB_DATE_KEY,
  LIB_MAKE_KEY,
  LIB_MODEL_KEY,
  LIB_ORIENTATION_KEY,
  LIB_ORIGINAL_FILE_PATH,
  LIB_RESOLUTION_KEY,
} from 'src/constants/metaData';
import getFilesMetaData from 'src/lib/getFilesMetaData';

describe('src/lib/getFilesMetaData integration tests', () => {
  test('should resolve expected metadata for 2 files', () => {
    const config = {
      [EXIFTOOL_KEY]: exiftool,
    };
    const files = [
      path.resolve('./testAssets/1.jpg'),
      path.resolve('./testAssets/2.jpg'),
    ];
    const expected = [
      {
        [LIB_DATE_KEY]: new Date(946717200000),
        [LIB_RESOLUTION_KEY]: '1x1',
        [LIB_MODEL_KEY]: 'A Camera Model',
        [LIB_MAKE_KEY]: 'A Camera Maker',
        [LIB_ORIGINAL_FILE_PATH]: files[0],
        [LIB_ORIENTATION_KEY]: 'Horizontal (normal)',
      },
      {
        [LIB_DATE_KEY]: new Date(949485600000),
        [LIB_RESOLUTION_KEY]: '2x2',
        [LIB_MODEL_KEY]: undefined,
        [LIB_MAKE_KEY]: undefined,
        [LIB_ORIGINAL_FILE_PATH]: files[1],
        [LIB_ORIENTATION_KEY]: undefined,
      },
    ];
    const result = getFilesMetaData(config, files);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });
});
