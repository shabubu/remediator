import {
  MODE_COPY,
  MODE_DRY,
  MODE_KEY,
  MODE_MOVE,
} from 'src/constants';
import { InvalidModeError } from 'src/errors';

/**
 * Checks for valid mode in Remediator config.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidModeError}
 */
export default function checkModeValue(config) {
  switch (config[MODE_KEY]) {
    case MODE_COPY:
    case MODE_DRY:
    case MODE_MOVE:
      return {
        ...config,
      };
    default:
      throw new InvalidModeError();
  }
}
