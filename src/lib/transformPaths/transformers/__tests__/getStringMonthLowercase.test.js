import { LIB_DATE_KEY } from 'src/constants/metaData';
import getStringMonthLowercase from 'src/lib/transformPaths/transformers/getStringMonthLowercase';

describe('src/lib/transformPaths/transformers/getStringMonthLowercase', () => {
  test('should return month name in lowercase', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 'january';
    const result = getStringMonthLowercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
