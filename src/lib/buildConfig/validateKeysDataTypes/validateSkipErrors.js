import { SKIP_ERRORS_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates skipErrors is proper data type.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateSkipErrors(config) {
  if (typeof config[SKIP_ERRORS_KEY] !== typeof true) {
    throw new InvalidOptionError(SKIP_ERRORS_KEY);
  }

  return {
    ...config,
  };
}
