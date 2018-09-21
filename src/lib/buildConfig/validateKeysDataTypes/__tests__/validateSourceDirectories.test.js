import path from 'path';
import { SOURCE_DIRECTORIES_KEY } from 'src/constants';
import validateSourceDirectories from 'src/lib/buildConfig/validateKeysDataTypes/validateSourceDirectories';
import { InvalidOptionError } from 'src/errors';

describe('src/lib/buildConfig/validateKeysDataTypes/validateSourceDirectories', () => {
  test('should return updated config if source directory string is valid', () => {
    const validDirectory = '../';
    const config = {
      [SOURCE_DIRECTORIES_KEY]: validDirectory,
    };
    const expected = {
      [SOURCE_DIRECTORIES_KEY]: [
        path.resolve(validDirectory),
      ],
    };
    const result = validateSourceDirectories(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return updated config if source directory array is valid', () => {
    const validDirectory = '../';
    const config = {
      [SOURCE_DIRECTORIES_KEY]: [validDirectory],
    };
    const expected = {
      [SOURCE_DIRECTORIES_KEY]: [
        path.resolve(validDirectory),
      ],
    };
    const result = validateSourceDirectories(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw if not an array or string', () => {
    const config = {
      [SOURCE_DIRECTORIES_KEY]: true,
    };

    expect.assertions(1);
    expect(() => {
      validateSourceDirectories(config);
    }).toThrow(new InvalidOptionError(SOURCE_DIRECTORIES_KEY));
  });

  test('should throw if empty array', () => {
    const config = {
      [SOURCE_DIRECTORIES_KEY]: [],
    };

    expect.assertions(1);
    expect(() => {
      validateSourceDirectories(config);
    }).toThrow(new InvalidOptionError(SOURCE_DIRECTORIES_KEY));
  });

  test('should throw when array has non string value', () => {
    const config = {
      [SOURCE_DIRECTORIES_KEY]: [false],
    };

    expect.assertions(1);
    expect(() => {
      validateSourceDirectories(config);
    }).toThrow(new InvalidOptionError(SOURCE_DIRECTORIES_KEY));
  });

  test('should throw if empty string is a source', () => {
    const config = {
      [SOURCE_DIRECTORIES_KEY]: [''],
    };

    expect.assertions(1);
    expect(() => {
      validateSourceDirectories(config);
    }).toThrow(new InvalidOptionError(SOURCE_DIRECTORIES_KEY));
  });
});
