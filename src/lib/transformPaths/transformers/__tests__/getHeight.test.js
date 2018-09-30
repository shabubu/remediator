import { LIB_RESOLUTION_KEY } from 'src/constants/metaData';
import getHeight from 'src/lib/transformPaths/transformers/getHeight';

describe('src/lib/transformPaths/transformers/getHeight', () => {
  test('should return height from resolution', () => {
    const metaData = {
      [LIB_RESOLUTION_KEY]: '1980x1080',
    };
    const expected = '1080';
    const result = getHeight(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return empty string if there is no resolution', () => {
    const metaData = {};
    const expected = '';
    const result = getHeight(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
