import { RECURSIVE_KEY } from '../../../constants';
import validateRecursive from '../validateRecursive';
import { InvalidOptionError } from '../../../errors';

describe('src/validateConfig/validateRecursive', () => {
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
