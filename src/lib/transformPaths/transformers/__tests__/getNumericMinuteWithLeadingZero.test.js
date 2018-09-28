import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericMinuteWithLeadingZero from 'src/lib/transformPaths/transformers/getNumericMinuteWithLeadingZero';

describe('src/lib/transformPaths/transformers/getNumericMinuteWithLeadingZero', () => {
  test('should return minute with leading zero from provided metadata date', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = '00';
    const result = getNumericMinuteWithLeadingZero(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
