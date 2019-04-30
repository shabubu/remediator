import { GEOCODING_API_KEY_KEY } from 'src/constants';

/**
 * Error for a invalid google api key for remediator library.
 */
class InvalidAPIKeyError extends Error {
  /**
   * Constructor for error.
   */
  constructor() {
    const message = `The ${GEOCODING_API_KEY_KEY} provided was rejected by Google.`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InvalidAPIKeyError);
  }
}

export default InvalidAPIKeyError;
