import { LIB_RESOLUTION_KEY } from 'src/constants/metaData';
import getWidth from 'src/lib/transformPaths/transformers/getWidth';

describe('src/lib/transformPaths/transformers/getWidth', () => {
  test('should return width from resolution', () => {
    const metaData = {
      [LIB_RESOLUTION_KEY]: '1920x1080',
    };
    const expected = '1920';
    const result = getWidth(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return empty string if there is no resolution', () => {
    const metaData = {};
    const expected = '';
    const result = getWidth(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
