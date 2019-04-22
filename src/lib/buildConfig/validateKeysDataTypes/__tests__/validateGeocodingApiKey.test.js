import { GEOCODING_API_KEY_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';
import validateGeocodingApiKey from 'src/lib/buildConfig/validateKeysDataTypes/validateGeocodingApiKey';

describe('src/lib/buildConfig/validateKeysDataTypes/validateGeocodingApiKey', () => {
  test('should return config when geocoding api key is a populated string', () => {
    const config = {
      [GEOCODING_API_KEY_KEY]: 'api_key',
    };
    const expected = {
      ...config,
    };
    const result = validateGeocodingApiKey(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when geocoding api key is not a string', () => {
    const config = {
      [GEOCODING_API_KEY_KEY]: [],
    };

    expect.assertions(1);
    expect(() => {
      validateGeocodingApiKey(config);
    }).toThrow(new InvalidOptionError(GEOCODING_API_KEY_KEY));
  });
});
