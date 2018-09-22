import {
  DEFAULT_SKIP_ERRORS,
  SKIP_ERRORS_KEY,
} from 'src/constants';
import { InvalidOptionError } from 'src/errors';
import validateSkipErrors from 'src/lib/buildConfig/validateKeysDataTypes/validateSkipErrors';

describe('src/lib/buildConfig/validateKeysDataTypes/validateSkipErrors', () => {
  test('should return config when skip errors is boolean', () => {
    const config = {
      [SKIP_ERRORS_KEY]: DEFAULT_SKIP_ERRORS,
    };
    const expected = {
      ...config,
    };
    const result = validateSkipErrors(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when skip errors is not boolean', () => {
    const config = {
      [SKIP_ERRORS_KEY]: 'true',
    };

    expect.assertions(1);
    expect(() => validateSkipErrors(config))
      .toThrow(new InvalidOptionError(SKIP_ERRORS_KEY));
  });
});
