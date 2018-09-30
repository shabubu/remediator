import { LIB_MAKE_KEY } from 'src/constants/metaData';
import getMakeUppercase from 'src/lib/transformPaths/transformers/getMakeUppercase';

describe('src/lib/transformPaths/transformers/getMakeUppercase', () => {
  test('should return camera make in uppercase from metadata', () => {
    const metaData = {
      [LIB_MAKE_KEY]: 'Camera Make',
    };
    const expected = 'CAMERA MAKE';
    const result = getMakeUppercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
