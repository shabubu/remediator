import path from 'path';
import {
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
  DEFAULT_FORMAT,
  DEFAULT_RECURSIVE,
  FORMAT_KEY,
  MODE_COPY,
  MODE_KEY,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import validateKeysDataTypes from 'src/lib/buildConfig/validateKeysDataTypes';

describe('src/lib/buildConfig/validateKeysDataTypes integration tests', () => {
  test('should validate and return validated and updated config object', () => {
    const validDirectory = '../';
    const config = {
      [FORMAT_KEY]: DEFAULT_FORMAT,
      [OUTPUT_DIRECTORY_KEY]: validDirectory,
      [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
      [SOURCE_DIRECTORIES_KEY]: validDirectory,
      [MODE_KEY]: MODE_COPY,
      [BATCH_SIZE_KEY]: DEFAULT_BATCH_SIZE,
    };
    const expected = {
      ...config,
      [OUTPUT_DIRECTORY_KEY]: path.resolve(validDirectory),
      [SOURCE_DIRECTORIES_KEY]: [
        path.resolve(validDirectory),
      ],
    };
    const result = validateKeysDataTypes(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
