import {
  MODE_COPY,
  MODE_DRY,
  MODE_KEY,
  MODE_MOVE,
} from '../../../constants';
import checkModeValue from '../checkModeValue';
import { InvalidModeError } from '../../../errors';

describe('src/lib/buildConfig/checkModeValue', () => {
  test('should return config with copy mode', () => {
    const config = {
      [MODE_KEY]: MODE_COPY,
    };
    const expected = {
      ...config,
    };
    const result = checkModeValue(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return config with move mode', () => {
    const config = {
      [MODE_KEY]: MODE_MOVE,
    };
    const expected = {
      ...config,
    };
    const result = checkModeValue(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return config with dry mode', () => {
    const config = {
      [MODE_KEY]: MODE_DRY,
    };
    const expected = {
      ...config,
    };
    const result = checkModeValue(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when mode is not supported', () => {
    const config = {
      [MODE_KEY]: 'pajamas',
    };

    expect(() => {
      checkModeValue(config);
    }).toThrow(new InvalidModeError());
  });
});
