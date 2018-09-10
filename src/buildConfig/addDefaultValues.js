import {
  FORMAT_KEY,
  DEFAULT_FORMAT,
  DEFAULT_RECURSIVE,
  RECURSIVE_KEY,
} from '../constants';

/**
 * Adds default config values and returns final config object for remediator.
 * @param   {object} options Options object provided to remediator library.
 * @returns {object}         Final config object.
 */
export default function addDefaultValues(options) {
  return {
    [FORMAT_KEY]: DEFAULT_FORMAT,
    [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
    ...options,
  };
}
