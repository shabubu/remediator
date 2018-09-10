import buildConfig from '../index';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
  RECURSIVE_KEY,
  FORMAT_KEY,
  DEFAULT_FORMAT,
} from '../../constants';

describe('src/buildConfig/index integration', () => {
  test('should return config', () => {
    const options = {
      [OUTPUT_DIRECTORY_KEY]: './foo',
      [SOURCE_DIRECTORIES_KEY]: './bar',
      [RECURSIVE_KEY]: true,
    };
    const expected = {
      ...options,
      [FORMAT_KEY]: DEFAULT_FORMAT,
    };
    const result = buildConfig(options);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
