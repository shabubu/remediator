import { LIB_MODEL_KEY } from 'src/constants/metaData';
import getModelUppercase from 'src/lib/transformPaths/transformers/getModelUppercase';

describe('src/lib/transformPaths/transformers/getModelUppercase', () => {
  test('should return camera model in uppercase from metadata', () => {
    const metaData = {
      [LIB_MODEL_KEY]: 'Camera Model',
    };
    const expected = 'CAMERA MODEL';
    const result = getModelUppercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
