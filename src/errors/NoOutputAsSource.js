/**
 * Error for output directory and source directory beihng identical for remediator library.
 */
class NoOutputAsSource extends Error {
  /**
   * Constructor for error.
   * @param {string} directory Directory path that was in both source and output.
   */
  constructor(directory) {
    const message = `"${directory}" cannot be a source and output`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, NoOutputAsSource);
  }
}

export default NoOutputAsSource;
