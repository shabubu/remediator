import { LIB_MODEL_KEY } from 'src/constants/metaData';
import getModelLowercase from 'src/lib/transformPaths/transformers/getModelLowercase';

describe('src/lib/transformPaths/transformers/getModelLowercase', () => {
  test('should return camera model in lowercase from metadata', () => {
    const metaData = {
      [LIB_MODEL_KEY]: 'Camera Model',
    };
    const expected = 'camera model';
    const result = getModelLowercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
