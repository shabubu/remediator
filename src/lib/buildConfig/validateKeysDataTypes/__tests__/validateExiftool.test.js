import { exiftool } from 'exiftool-vendored';
import { EXIFTOOL_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';
import validateExiftool from 'src/lib/buildConfig/validateKeysDataTypes/validateExiftool';

describe('src/lib/buildConfig/validateKeysDataTypes/validateBatchSize', () => {
  test('should return config when valid', () => {
    const config = {
      [EXIFTOOL_KEY]: exiftool,
    };
    const expected = {
      ...config,
    };
    const result = validateExiftool(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when invalid', () => {
    const config = {
      [EXIFTOOL_KEY]: true,
    };

    expect.assertions(1);
    expect(() => {
      validateExiftool(config);
    }).toThrow(new InvalidOptionError(EXIFTOOL_KEY));
  });
});
