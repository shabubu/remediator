import { LIB_WIDTH_KEY } from 'src/constants/metaData';
import getWidth from 'src/lib/transformPaths/transformers/getWidth';

describe('src/lib/transformPaths/transformers/getWidth', () => {
  test('should return width from resolution', () => {
    const metaData = {
      [LIB_WIDTH_KEY]: 1,
    };
    const expected = 1;
    const result = getWidth(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
