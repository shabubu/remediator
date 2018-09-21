import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import { MissingOptionError } from 'src/errors';

/**
 * Required keys in options
 */
const REQUIRED_OPTIONS_KEYS = [
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
];

/**
 * Throws MissingOptionError if required options are not present.
 * @param {object} options Options object provided to remediator library.
 * @throws MissingOptionError
 */
export default function checkRequired(options) {
  REQUIRED_OPTIONS_KEYS.forEach((key) => {
    const hasKey = Object.prototype.hasOwnProperty.call(options, key);

    if (!hasKey) {
      throw new MissingOptionError(key);
    }
  });
}
