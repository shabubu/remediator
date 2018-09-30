import { LIB_ORIENTATION_KEY } from 'src/constants/metaData';
import getOrientationUppercase from 'src/lib/transformPaths/transformers/getOrientationUppercase';

describe('src/lib/transformPaths/transformers/getOrientationUppercase', () => {
  test('should return camera orientation in uppercase from metadata', () => {
    const metaData = {
      [LIB_ORIENTATION_KEY]: 'Horizontal (normal)',
    };
    const expected = 'HORIZONTAL (NORMAL)';
    const result = getOrientationUppercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
