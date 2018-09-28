import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericMonth from 'src/lib/transformPaths/transformers/getNumericMonth';

describe('src/lib/transformPaths/transformers/getNumericMonth', () => {
  test('should return month without leading zero from provided metadata date', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 1;
    const result = getNumericMonth(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
