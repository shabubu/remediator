import { LIB_DATE_KEY } from 'src/constants/metaData';
import getStringMonth from 'src/lib/transformPaths/transformers/getStringMonth';

describe('src/lib/transformPaths/transformers/getStringMonth', () => {
  test('should return month name', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 'January';
    const result = getStringMonth(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
