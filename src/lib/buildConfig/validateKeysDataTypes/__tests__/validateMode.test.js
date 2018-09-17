import { MODE_KEY } from '../../../../constants';
import { InvalidOptionError } from '../../../../errors';
import validateMode from '../validateMode';

describe('src/lib/buildConfig/validateKeysDataTypes/validateMode', () => {
  test('should return config when mode is a populated string', () => {
    const config = { [MODE_KEY]: ':Month:' };
    const expected = { [MODE_KEY]: config[MODE_KEY].toLowerCase() };
    const result = validateMode(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when mode is not a string', () => {
    const config = { [MODE_KEY]: [] };

    expect.assertions(1);
    expect(() => {
      validateMode(config);
    }).toThrow(new InvalidOptionError(MODE_KEY));
  });

  test('should throw when mode is a empty string', () => {
    const config = { [MODE_KEY]: '' };

    expect.assertions(1);
    expect(() => {
      validateMode(config);
    }).toThrow(new InvalidOptionError(MODE_KEY));
  });
});
