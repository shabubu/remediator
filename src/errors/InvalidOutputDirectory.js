/**
 * Error for output directory that cannot be written to for remediator library.
 */
class InvalidOutputDirectory extends Error {
  /**
   * Constructor for error.
   * @param {string} directory Directory path that cannot be written to.
   */
  constructor(directory) {
    const message = `Unable to open "${directory}" with write access`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InvalidOutputDirectory);
  }
}

export default InvalidOutputDirectory;
