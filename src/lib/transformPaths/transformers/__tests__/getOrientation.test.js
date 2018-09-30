import { LIB_ORIENTATION_KEY } from 'src/constants/metaData';
import getOrientation from 'src/lib/transformPaths/transformers/getOrientation';

describe('src/lib/transformPaths/transformers/getOrientation', () => {
  test('should return camera orientation from metadata', () => {
    const metaData = {
      [LIB_ORIENTATION_KEY]: 'Horizontal (normal)',
    };
    const expected = metaData[LIB_ORIENTATION_KEY];
    const result = getOrientation(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return empty string when not in metadata', () => {
    const metaData = {};
    const expected = '';
    const result = getOrientation(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
