import { LIB_HEIGHT_KEY } from 'src/constants/metaData';
import getHeight from 'src/lib/transformPaths/transformers/getHeight';

describe('src/lib/transformPaths/transformers/getHeight', () => {
  test('should return height from resolution', () => {
    const metaData = {
      [LIB_HEIGHT_KEY]: 1,
    };
    const expected = 1;
    const result = getHeight(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
