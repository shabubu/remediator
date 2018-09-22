import {
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
} from 'src/constants';
import { InvalidOptionError } from 'src/errors';
import validateBatchSize from 'src/lib/buildConfig/validateKeysDataTypes/validateBatchSize';

describe('src/lib/buildConfig/validateKeysDataTypes/validateBatchSize', () => {
  test('should return config when valid', () => {
    const config = {
      [BATCH_SIZE_KEY]: DEFAULT_BATCH_SIZE,
    };
    const expected = {
      ...config,
    };
    const result = validateBatchSize(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when batch size is not a integer', () => {
    const config = {
      [BATCH_SIZE_KEY]: '',
    };

    expect.assertions(1);
    expect(() => validateBatchSize(config))
      .toThrow(new InvalidOptionError(BATCH_SIZE_KEY));
  });
});
