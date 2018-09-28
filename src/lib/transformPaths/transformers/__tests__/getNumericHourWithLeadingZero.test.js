import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericHourWithLeadingZero from 'src/lib/transformPaths/transformers/getNumericHourWithLeadingZero';

describe('src/lib/transformPaths/transformers/getNumericHourWithLeadingZero', () => {
  test('should return numeric hour with leading zero', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = '04';
    const result = getNumericHourWithLeadingZero(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
