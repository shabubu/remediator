import { MODE_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates the mode is proper data type and not empty.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object with lowercase mode
 * @throws  {InvalidOptionError}
 */
export default function validateMode(config) {
  const mode = config[MODE_KEY];

  if (
    !mode
    || typeof mode !== typeof ''
  ) {
    throw new InvalidOptionError(MODE_KEY);
  }

  return {
    ...config,
    [MODE_KEY]: mode.toLowerCase(),
  };
}
