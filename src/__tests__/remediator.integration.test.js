import path from 'path';
import remediator from 'src';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
  RECURSIVE_KEY,
  FORMAT_KEY,
  DEFAULT_RECURSIVE,
  TRANSFORMER_ACTIONS_KEY,
  TRANSFORMER_NAME_KEY,
  TRANSFORMER_REPLACE_STRING_KEY,
  MODE_KEY,
  MODE_COPY,
} from 'src/constants';
import { MissingOptionError } from 'src/errors';

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
      [FORMAT_KEY]: ': Day :.:Ext:',
    };
    const expected = {
      ...options,
      [OUTPUT_DIRECTORY_KEY]: path.resolve(validDirectory),
      [SOURCE_DIRECTORIES_KEY]: [
        path.resolve(validDirectory),
      ],
      [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
      [MODE_KEY]: MODE_COPY,
      [TRANSFORMER_ACTIONS_KEY]: [
        {
          [TRANSFORMER_NAME_KEY]: 'Day',
          [TRANSFORMER_REPLACE_STRING_KEY]: ': Day :',
        },
        {
          [TRANSFORMER_NAME_KEY]: 'Ext',
          [TRANSFORMER_REPLACE_STRING_KEY]: ':Ext:',
        },
      ],
    };

    expect.assertions(1);
    return expect(remediator(options))
      .resolves
      .toEqual(expected);
  });
});
