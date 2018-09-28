import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericYear from 'src/lib/transformPaths/transformers/getNumericYear';

describe('src/lib/transformPaths/transformers/getNumericYear', () => {
  test('should return year from provided metadata date', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const result = getNumericYear(metaData);
    const expected = 1970;

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
