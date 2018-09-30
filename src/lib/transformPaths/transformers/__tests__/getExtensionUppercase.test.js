import { LIB_ORIGINAL_FILE_PATH } from 'src/constants/metaData';
import getExtensionUppercase from 'src/lib/transformPaths/transformers/getExtensionUppercase';

describe('src/lib/transformPaths/transformers/getExtensionUppercase', () => {
  test('should return extension in all uppercase from file path', () => {
    const metaData = {
      [LIB_ORIGINAL_FILE_PATH]: './test.Jpg',
    };
    const expected = 'JPG';
    const result = getExtensionUppercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
