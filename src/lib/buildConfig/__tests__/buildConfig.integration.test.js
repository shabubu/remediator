import path from 'path';
import buildConfig from 'src/lib/buildConfig';
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
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
  SKIP_ERRORS_KEY,
  DEFAULT_SKIP_ERRORS,
} from 'src/constants';

describe('src/lib/buildConfig integration tests', () => {
  test('should return valid config with all parameters', () => {
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
      [BATCH_SIZE_KEY]: DEFAULT_BATCH_SIZE,
      [SKIP_ERRORS_KEY]: DEFAULT_SKIP_ERRORS,
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
    const result = buildConfig(options);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });
});
