import { FORMAT_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';
import validateFormat from 'src/lib/buildConfig/validateKeysDataTypes/validateFormat';

describe('src/lib/buildConfig/validateKeysDataTypes/validateFormat', () => {
  test('should return config when format is a populated string', () => {
    const config = {
      [FORMAT_KEY]: ':Month:',
    };
    const expected = {
      ...config,
    };
    const result = validateFormat(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when format is not a string', () => {
    const config = {
      [FORMAT_KEY]: [],
    };

    expect.assertions(1);
    expect(() => {
      validateFormat(config);
    }).toThrow(new InvalidOptionError(FORMAT_KEY));
  });

  test('should throw when format is a empty string', () => {
    const config = {
      [FORMAT_KEY]: '',
    };

    expect.assertions(1);
    expect(() => {
      validateFormat(config);
    }).toThrow(new InvalidOptionError(FORMAT_KEY));
  });
});
