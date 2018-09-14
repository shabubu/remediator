/**
 * Error for a source directory that cannot be read from for remediator library.
 */
class InvalidSourceDirectory extends Error {
  /**
   * Constructor for error.
   * @param {string} directory Directory path that cannot be read from.
   */
  constructor(directory) {
    const message = `Unable to read "${directory}"`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InvalidSourceDirectory);
  }
}

export default InvalidSourceDirectory;
