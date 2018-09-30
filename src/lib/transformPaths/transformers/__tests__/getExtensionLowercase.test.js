import { LIB_ORIGINAL_FILE_PATH } from 'src/constants/metaData';
import getExtensionLowercase from 'src/lib/transformPaths/transformers/getExtensionLowercase';

describe('src/lib/transformPaths/transformers/getExtensionLowercase', () => {
  test('should return extension in all lowercase from file path', () => {
    const metaData = {
      [LIB_ORIGINAL_FILE_PATH]: './test.Jpg',
    };
    const expected = 'jpg';
    const result = getExtensionLowercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
