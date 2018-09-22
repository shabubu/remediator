import {
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
} from 'src/constants';
import { InvalidBatchSizeError } from 'src/errors';
import checkBatchSizeValue from 'src/lib/buildConfig/checkBatchSizeValue';

describe('src/lib/buildConfig/checkBatchSizeValue', () => {
  test('should resolve config if batch size is valid', () => {
    const config = {
      [BATCH_SIZE_KEY]: DEFAULT_BATCH_SIZE,
    };
    const expected = {
      ...config,
    };
    const result = checkBatchSizeValue(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when batch size is 0', () => {
    const config = {
      [BATCH_SIZE_KEY]: 0,
    };

    expect.assertions(1);
    expect(() => checkBatchSizeValue(config))
      .toThrow(new InvalidBatchSizeError());
  });

  test('should throw when batch size is less than -1', () => {
    const config = {
      [BATCH_SIZE_KEY]: -2,
    };

    expect.assertions(1);
    expect(() => checkBatchSizeValue(config))
      .toThrow(new InvalidBatchSizeError());
  });
});
