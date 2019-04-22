import {
  BATCH_SIZE_KEY,
  FORMAT_KEY,
  DEFAULT_BATCH_SIZE,
  DEFAULT_FORMAT,
  DEFAULT_RECURSIVE,
  MODE_KEY,
  RECURSIVE_KEY,
  SKIP_ERRORS_KEY,
  DEFAULT_SKIP_ERRORS,
  DEFAULT_MODE,
  GEOCODING_API_KEY_KEY,
  DEFAULT_GEOCODING_API_KEY,
} from 'src/constants';

/**
 * Adds default config values and returns final config object for Remediator.
 * @param   {object} options Options object provided to Remediator library.
 * @returns {object}         Config object with any missing keys.
 */
export default function addDefaultValues(options) {
  return {
    [FORMAT_KEY]: DEFAULT_FORMAT,
    [RECURSIVE_KEY]: DEFAULT_RECURSIVE,
    [MODE_KEY]: DEFAULT_MODE,
    [BATCH_SIZE_KEY]: DEFAULT_BATCH_SIZE,
    [SKIP_ERRORS_KEY]: DEFAULT_SKIP_ERRORS,
    [GEOCODING_API_KEY_KEY]: DEFAULT_GEOCODING_API_KEY,
    ...options,
  };
}
