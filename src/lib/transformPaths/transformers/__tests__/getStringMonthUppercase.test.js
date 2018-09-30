import { LIB_DATE_KEY } from 'src/constants/metaData';
import getStringMonthUppercase from 'src/lib/transformPaths/transformers/getStringMonthUppercase';

describe('src/lib/transformPaths/transformers/getStringMonthUppercase', () => {
  test('should return month name in lowercase', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 'JANUARY';
    const result = getStringMonthUppercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
