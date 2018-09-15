import path from 'path';
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

describe('Remediator integration tests', () => {
  test('should throw error when required options not passed in', () => {
    expect.assertions(1);
    return expect(remediator())
      .rejects
      .toEqual(new MissingOptionError(OUTPUT_DIRECTORY_KEY));
  });

  test('should successfully execute using default config values', () => {
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

    expect.assertions(1);
    return expect(remediator(options))
      .resolves
      .toEqual(expected);
  });
});
