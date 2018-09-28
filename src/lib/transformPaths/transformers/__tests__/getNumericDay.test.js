import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericDay from 'src/lib/transformPaths/transformers/getNumericDay';

describe('src/lib/transformPaths/transformers/getNumericDay', () => {
  test('should return numeric day without leading zero', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 3;
    const result = getNumericDay(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
