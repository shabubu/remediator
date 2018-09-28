import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericHour from 'src/lib/transformPaths/transformers/getNumericHour';

describe('src/lib/transformPaths/transformers/getNumericHour', () => {
  test('should return numeric hour without leading zero', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 4;
    const result = getNumericHour(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
