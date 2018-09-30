import path from 'path';
import {
  LIB_DATE_KEY,
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
import getFilesMetaData from 'src/lib/getFilesMetaData';

describe('src/lib/getFilesMetaData integration tests', () => {
  // setup and tear down exiftool process for test(s)
  beforeAll(done => openExifToolProcess().then(() => done()));
  afterAll(() => closeExifToolProcess());

  test('should resolve expected metadata for 2 files', () => {
    const config = {};
    const files = [
      path.resolve('./testAssets/1.jpg'),
      path.resolve('./testAssets/2.jpg'),
    ];
    const expected = [
      {
        [LIB_DATE_KEY]: new Date(946717200000),
        [LIB_HEIGHT_KEY]: '1',
        [LIB_WIDTH_KEY]: '1',
        [LIB_MODEL_KEY]: 'A Camera Model',
        [LIB_MAKE_KEY]: 'A Camera Maker',
        [LIB_ORIGINAL_FILE_PATH]: files[0],
        [LIB_ORIENTATION_KEY]: 'Horizontal (normal)',
      },
      {
        [LIB_DATE_KEY]: new Date(949485600000),
        [LIB_HEIGHT_KEY]: '2',
        [LIB_WIDTH_KEY]: '2',
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
