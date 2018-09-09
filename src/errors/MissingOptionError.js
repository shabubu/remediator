/**
 * Error for missing required options for remediator library.
 */
class MissingOptionError extends Error {
  /**
   * Constructor for error.
   * @param {string} optionName Name of the option
   */
  constructor(optionName) {
    const message = `Missing required options parameter: ${optionName}`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, MissingOptionError);
  }
}

export default MissingOptionError;
