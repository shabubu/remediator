import {
  FORMAT_KEY,
  DEFAULT_FORMAT,
  DEFAULT_RECURSIVE,
  RECURSIVE_KEY,
} from '../constants';

/**
 * Adds default config values and returns final config object for Remediator.
 * @param   {object} options Options object provided to Remediator library.
 * @returns {object}         Config object with any missing keys.
 */
export default function addDefaultValues(options) {
  return {
    [FORMAT_KEY]: DEFAULT_FORMAT,
    [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
    ...options,
  };
}
