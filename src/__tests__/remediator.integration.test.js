import remediator from '../index';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
  RECURSIVE_KEY,
  FORMAT_KEY,
  DEFAULT_FORMAT,
  DEFAULT_RECURSIVE,
} from '../constants';
import { MissingOptionError } from '../errors';

describe('src integration tests', () => {
  test('should throw error when required options not passed in', () => {
    expect.assertions(1);
    return expect(remediator())
      .rejects
      .toEqual(new MissingOptionError(OUTPUT_DIRECTORY_KEY));
  });

  test('should successfully execute using default config values', () => {
    const options = {
      [OUTPUT_DIRECTORY_KEY]: './foo',
      [SOURCE_DIRECTORIES_KEY]: './bar',
    };
    const expected = {
      ...options,
      [FORMAT_KEY]: DEFAULT_FORMAT,
      [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
    };

    expect.assertions(1);
    return expect(remediator(options))
      .resolves
      .toEqual(expected);
  });
});
