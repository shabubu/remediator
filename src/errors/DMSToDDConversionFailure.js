/**
 * Error if error encountered converting DMS to DD.
 */
class DMSToDDConversionFailure extends Error {
  /**
   * Constructor for error.
   * @param {mixed} sourceDMS Provided DMS source.
   */
  constructor(sourceDMS) {
    const message = `Unable to convert ${sourceDMS} from DMS to DD location format.`;
    super(message);
    this.message = message;
    Error.captureStackTrace(this, DMSToDDConversionFailure);
  }
}

export default DMSToDDConversionFailure;
