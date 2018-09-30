import { LIB_ORIENTATION_KEY } from 'src/constants/metaData';
import getOrientationLowercase from 'src/lib/transformPaths/transformers/getOrientationLowercase';

describe('src/lib/transformPaths/transformers/getOrientationLowercase', () => {
  test('should return camera orientation in lowercase from metadata', () => {
    const metaData = {
      [LIB_ORIENTATION_KEY]: 'Horizontal (normal)',
    };
    const expected = 'horizontal (normal)';
    const result = getOrientationLowercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
