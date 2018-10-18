import addDefaultValues from 'src/lib/buildConfig/addDefaultValues';
import {
  FORMAT_KEY,
  DEFAULT_FORMAT,
  DEFAULT_RECURSIVE,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  SOURCE_DIRECTORIES_KEY,
  MODE_KEY,
  MODE_DRY,
  BATCH_SIZE_KEY,
  DEFAULT_BATCH_SIZE,
  SKIP_ERRORS_KEY,
  DEFAULT_SKIP_ERRORS,
  DEFAULT_MODE,
} from 'src/constants';

describe('src/lib/buildConfig/addDefaultValues', () => {
  test('should add missing default keys and values', () => {
    const options = {
      [OUTPUT_DIRECTORY_KEY]: './foo',
      [SOURCE_DIRECTORIES_KEY]: ['./bar'],
    };
    const expected = {
      ...options,
      [FORMAT_KEY]: DEFAULT_FORMAT,
      [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
      [MODE_KEY]: DEFAULT_MODE,
      [BATCH_SIZE_KEY]: DEFAULT_BATCH_SIZE,
      [SKIP_ERRORS_KEY]: DEFAULT_SKIP_ERRORS,
    };
    const result = addDefaultValues(options);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should add no defaults if all keys are provided', () => {
    const options = {
      [OUTPUT_DIRECTORY_KEY]: './foo',
      [SOURCE_DIRECTORIES_KEY]: ['./bar'],
      [FORMAT_KEY]: ':YYYY:',
      [RECURSIVE_KEY]: true,
      [MODE_KEY]: MODE_DRY,
      [BATCH_SIZE_KEY]: 25,
      [SKIP_ERRORS_KEY]: true,
    };
    const result = addDefaultValues(options);

    expect.assertions(1);
    expect(result).toEqual(options);
  });
});
