import { GEOCODING_API_KEY_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates the geocoding api key is proper data type.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateGeocodingApiKey(config) {
  const format = config[GEOCODING_API_KEY_KEY];

  if (typeof format !== typeof '') {
    throw new InvalidOptionError(GEOCODING_API_KEY_KEY);
  }

  return {
    ...config,
  };
}
