import { LIB_DATE_KEY } from 'src/constants/metaData';
import getStringDayUppercase from 'src/lib/transformPaths/transformers/getStringDayUppercase';

describe('src/lib/transformPaths/transformers/getStringDayUppercase', () => {
  test('should return month name in lowercase', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 'SATURDAY';
    const result = getStringDayUppercase(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
