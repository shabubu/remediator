import { BATCH_SIZE_KEY } from 'src/constants';

/**
 * Error if batchSize in config is invalid integer.
 */
class InvalidModeError extends Error {
  /**
   * Constructor for error.
   */
  constructor() {
    const message = `Option "${BATCH_SIZE_KEY}" must be greater than 0 or -1 (all)`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InvalidModeError);
  }
}

export default InvalidModeError;
