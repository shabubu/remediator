import { FORMAT_KEY } from 'src/constants';

/**
 * Error for missing transformer in format section for remediator library.
 */
class TransformerMissingError extends Error {
  /**
   * Constructor for error.
   * @param {string} formatSection Errant format section.
   */
  constructor(formatSection) {
    const message = `Transformer missing in ${FORMAT_KEY}: "${formatSection}"`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, TransformerMissingError);
  }
}

export default TransformerMissingError;
