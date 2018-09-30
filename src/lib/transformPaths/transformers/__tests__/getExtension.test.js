import { LIB_ORIGINAL_FILE_PATH } from 'src/constants/metaData';
import getExtension from 'src/lib/transformPaths/transformers/getExtension';

describe('src/lib/transformPaths/transformers/getExtension', () => {
  test('should return extension from file path', () => {
    const metaData = {
      [LIB_ORIGINAL_FILE_PATH]: './test.Jpg',
    };
    const expected = 'Jpg';
    const result = getExtension(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
