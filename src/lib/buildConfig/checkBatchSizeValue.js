import { BATCH_SIZE_KEY } from 'src/constants';
import { InvalidBatchSizeError } from 'src/errors';

/**
 * Checks for valid batch size in Remediator config.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidBatchSizeError}
 */
export default function checkBatchSizeValue(config) {
  const size = config[BATCH_SIZE_KEY];

  // check if value is greater than 0 or -1 (all)
  if (
    size < 1
    && size !== -1
  ) {
    throw new InvalidBatchSizeError();
  }
  return {
    ...config,
  };
}
