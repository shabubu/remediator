import path from 'path';
import {
  ATIME_KEY,
  BIRTHTIME_KEY,
  CTIME_KEY,
  MTIME_KEY,
} from 'src/constants/metaData';
import getFileSystemMetaData from 'src/lib/getFilesMetaData/getFileSystemMetaData';

describe('src/lib/getFilesMetaData/getFileSystemMetaData', () => {
  test('should return object with time values from file', () => {
    const filePath = path.resolve('./testAssets/1.jpg');
    const result = getFileSystemMetaData(filePath);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expect.objectContaining({
        [ATIME_KEY]: expect.any(Object),
        [BIRTHTIME_KEY]: expect.any(Object),
        [CTIME_KEY]: expect.any(Object),
        [MTIME_KEY]: expect.any(Object),
      }));
  });
});
