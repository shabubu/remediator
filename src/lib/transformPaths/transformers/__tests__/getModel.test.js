import { LIB_MODEL_KEY } from 'src/constants/metaData';
import getModel from 'src/lib/transformPaths/transformers/getModel';

describe('src/lib/transformPaths/transformers/getModel', () => {
  test('should return camera model from metadata', () => {
    const metaData = {
      [LIB_MODEL_KEY]: 'Camera Model',
    };
    const expected = metaData[LIB_MODEL_KEY];
    const result = getModel(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return empty string when not in metadata', () => {
    const metaData = {};
    const expected = '';
    const result = getModel(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
