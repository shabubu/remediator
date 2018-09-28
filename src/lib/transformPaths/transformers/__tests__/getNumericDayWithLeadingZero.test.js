import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericDayWithLeadingZero
  from 'src/lib/transformPaths/transformers/getNumericDayWithLeadingZero';

describe('src/lib/transformPaths/transformers/getNumericDayWithLeadingZero', () => {
  test('should return numeric day with leading zero', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = '03';
    const result = getNumericDayWithLeadingZero(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
