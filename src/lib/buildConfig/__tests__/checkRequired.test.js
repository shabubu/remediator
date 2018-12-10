import { exiftool } from 'exiftool-vendored';
import checkRequired from 'src/lib/buildConfig/checkRequired';
import {
  EXIFTOOL_KEY,
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import { MissingOptionError } from 'src/errors';

describe('src/lib/buildConfig/checkRequired', () => {
  test('should throw error when a required option is missing', () => {
    const options = {};

    expect.assertions(1);
    expect(() => {
      checkRequired(options);
    }).toThrow(new MissingOptionError(EXIFTOOL_KEY));
  });

  test('should not throw when all required options exist', () => {
    const options = {
      [EXIFTOOL_KEY]: exiftool,
      [OUTPUT_DIRECTORY_KEY]: true,
      [SOURCE_DIRECTORIES_KEY]: true,
    };

    expect.assertions(1);
    expect(() => {
      checkRequired(options);
    }).not.toThrow();
  });
});
