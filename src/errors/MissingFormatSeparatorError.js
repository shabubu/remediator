import {
  FORMAT_KEY,
  FORMAT_SEPARATOR,
} from 'src/constants';

/**
 * Error for missing transformer separator in format for remediator library.
 */
class MissingFormatSeparatorError extends Error {
  /**
   * Constructor for error.
   * @param {string} format Errant format string.
   */
  constructor(format) {
    const message = `Option "${FORMAT_KEY}" Missing closing "${FORMAT_SEPARATOR}" in "${format}"`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, MissingFormatSeparatorError);
  }
}

export default MissingFormatSeparatorError;
