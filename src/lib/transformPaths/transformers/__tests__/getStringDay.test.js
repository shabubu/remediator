import { LIB_DATE_KEY } from 'src/constants/metaData';
import getStringDay from 'src/lib/transformPaths/transformers/getStringDay';

describe('src/lib/transformPaths/transformers/getStringDay', () => {
  test('should return month name in lowercase', () => {
    const metaData = {
      [LIB_DATE_KEY]: new Date(216000000),
    };
    const expected = 'Saturday';
    const result = getStringDay(metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
