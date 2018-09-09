/**
 * Error for invalid options for remediator library.
 */
class InvalidOptionError extends Error {
  /**
   * Constructor for error.
   * @param {string} optionName Name of the option
   */
  constructor(optionName) {
    const message = `The Following options parameter is invalid: ${optionName}`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InvalidOptionError);
  }
}

export default InvalidOptionError;
