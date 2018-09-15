import path from 'path';
import { OUTPUT_DIRECTORY_KEY } from '../../../../constants';
import validateOutputDirectory from '../validateOutputDirectory';
import { InvalidOptionError } from '../../../../errors';

describe('src/lib/buildConfig/validateKeysDataTypes/validateOutputDirectory', () => {
  test('should return updated config if output directory is valid', () => {
    const validDirectory = '../';
    const config = {
      [OUTPUT_DIRECTORY_KEY]: validDirectory,
    };
    const expected = {
      [OUTPUT_DIRECTORY_KEY]: path.resolve(validDirectory),
    };
    const result = validateOutputDirectory(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when not a string', () => {
    const config = {
      [OUTPUT_DIRECTORY_KEY]: [],
    };

    expect.assertions(1);
    expect(() => {
      validateOutputDirectory(config);
    }).toThrow(new InvalidOptionError(OUTPUT_DIRECTORY_KEY));
  });

  test('should throw when empty string', () => {
    const config = {
      [OUTPUT_DIRECTORY_KEY]: '',
    };

    expect.assertions(1);
    expect(() => {
      validateOutputDirectory(config);
    }).toThrow(new InvalidOptionError(OUTPUT_DIRECTORY_KEY));
  });
});
