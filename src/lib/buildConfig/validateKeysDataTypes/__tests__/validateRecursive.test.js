import { RECURSIVE_KEY } from 'src/constants';
import validateRecursive from 'src/lib/buildConfig/validateKeysDataTypes/validateRecursive';
import { InvalidOptionError } from 'src/errors';

describe('src/lib/validateConfig/validateRecursive', () => {
  test('should return config if type is boolean', () => {
    const config = {
      [RECURSIVE_KEY]: false,
    };
    const expected = {
      ...config,
    };
    const result = validateRecursive(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when recursive is not a boolean value', () => {
    const config = {
      [RECURSIVE_KEY]: 'foo',
    };

    expect.assertions(1);
    expect(() => {
      validateRecursive(config);
    }).toThrow(new InvalidOptionError(RECURSIVE_KEY));
  });
});
