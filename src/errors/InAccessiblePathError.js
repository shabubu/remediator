/**
 * Error for output or source directory that doesn't exist,
 * is not readable, or is not writable.
 */
class InAccessiblePathError extends Error {
  /**
   * Constructor for error.
   * @param {string} directory Directory path that cannot be accessed.
   */
  constructor(directory) {
    const message = `Unable to locate, read, or write: ${directory}`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, InAccessiblePathError);
  }
}

export default InAccessiblePathError;
