import checkRequired from '../checkRequired';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
} from '../../constants';
import { MissingOptionError } from '../../errors';

describe('src/buildConfig/checkRequired', () => {
  test('should throw error when a required option is missing', () => {
    const options = {};

    expect.assertions(1);
    expect(() => {
      checkRequired(options);
    }).toThrow(new MissingOptionError(OUTPUT_DIRECTORY_KEY));
  });

  test('should not throw when all required options exist', () => {
    const options = {
      [OUTPUT_DIRECTORY_KEY]: true,
      [SOURCE_DIRECTORIES_KEY]: true,
    };

    expect.assertions(1);
    expect(() => {
      checkRequired(options);
    }).not.toThrow();
  });
});
