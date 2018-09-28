import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericMonthWithLeadingZero
  from 'src/lib/transformPaths/transformers/getNumericMonthWithLeadingZero';

describe('src/lib/transformPaths/transformers/getNumericMonthWithLeadingZero', () => {
  test('should return month with leading zero from provided meta data date', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = '01';
    const result = getNumericMonthWithLeadingZero(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
