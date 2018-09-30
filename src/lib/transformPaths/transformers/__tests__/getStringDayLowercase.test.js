import { LIB_DATE_KEY } from 'src/constants/metaData';
import getStringDayLowercase from 'src/lib/transformPaths/transformers/getStringDayLowercase';

describe('src/lib/transformPaths/transformers/getStringDayLowercase', () => {
  test('should return month name in lowercase', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 'saturday';
    const result = getStringDayLowercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
