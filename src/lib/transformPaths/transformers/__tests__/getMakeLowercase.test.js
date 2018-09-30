import { LIB_MAKE_KEY } from 'src/constants/metaData';
import getMakeLowercase from 'src/lib/transformPaths/transformers/getMakeLowercase';

describe('src/lib/transformPaths/transformers/getMakeLowercase', () => {
  test('should return camera make in lowercase from metadata', () => {
    const metaData = {
      [LIB_MAKE_KEY]: 'Camera Make',
    };
    const expected = 'camera make';
    const result = getMakeLowercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
