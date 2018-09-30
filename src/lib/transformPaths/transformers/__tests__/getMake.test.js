import { LIB_MAKE_KEY } from 'src/constants/metaData';
import getMake from 'src/lib/transformPaths/transformers/getMake';

describe('src/lib/transformPaths/transformers/getMake', () => {
  test('should return camera make from metadata', () => {
    const metaData = {
      [LIB_MAKE_KEY]: 'Camera Make',
    };
    const expected = metaData[LIB_MAKE_KEY];
    const result = getMake(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return empty string when not in metadata', () => {
    const metaData = {};
    const expected = '';
    const result = getMake(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
