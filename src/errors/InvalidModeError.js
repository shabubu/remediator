import {
  MODE_COPY,
  MODE_DRY,
  MODE_KEY,
  MODE_MOVE,
} from 'src/constants';

/**
 * Error if mode in config is not supported.
 */
class InvalidModeError extends Error {
  /**
   * Constructor for error.
   */
  constructor() {
    const message = `Option "${MODE_KEY}" must only be one of the following: ${MODE_COPY}, ${MODE_DRY}, and ${MODE_MOVE}`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InvalidModeError);
  }
}

export default InvalidModeError;
