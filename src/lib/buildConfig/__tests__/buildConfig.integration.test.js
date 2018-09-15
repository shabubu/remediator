import path from 'path';
import buildConfig from '../index';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
  RECURSIVE_KEY,
  FORMAT_KEY,
  DEFAULT_FORMAT, DEFAULT_RECURSIVE,
} from '../../../constants';

describe('src/lib/buildConfig integration tests', () => {
  test('should return valid config with all parameters', () => {
    const validDirectory = '../';
    const options = {
      [OUTPUT_DIRECTORY_KEY]: validDirectory,
      [SOURCE_DIRECTORIES_KEY]: validDirectory,
    };
    const expected = {
      [OUTPUT_DIRECTORY_KEY]: path.resolve(validDirectory),
      [SOURCE_DIRECTORIES_KEY]: [
        path.resolve(validDirectory),
      ],
      [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
      [FORMAT_KEY]: DEFAULT_FORMAT,
    };
    const result = buildConfig(options);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });
});
