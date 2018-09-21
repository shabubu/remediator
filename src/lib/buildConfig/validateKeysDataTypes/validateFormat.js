import { FORMAT_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates the format is proper data type and not empty.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateFormat(config) {
  const format = config[FORMAT_KEY];

  if (
    !format
    || typeof format !== typeof ''
  ) {
    throw new InvalidOptionError(FORMAT_KEY);
  }

  return {
    ...config,
  };
}
