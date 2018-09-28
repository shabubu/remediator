import { LIB_DATE_KEY } from 'src/constants/metaData';
import getNumericMinute from 'src/lib/transformPaths/transformers/getNumericMinute';

describe('src/lib/transformPaths/transformers/getNumericMinute', () => {
  test('should return minute without leading zero from provided metadata date', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 0;
    const result = getNumericMinute(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
