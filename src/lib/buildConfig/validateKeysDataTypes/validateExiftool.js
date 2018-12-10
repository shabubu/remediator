import { EXIFTOOL_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates exiftool is proper data type.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateExiftool(config) {
  if (typeof config[EXIFTOOL_KEY] !== typeof {}) {
    throw new InvalidOptionError(EXIFTOOL_KEY);
  }

  return {
    ...config,
  };
}
