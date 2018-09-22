import { BATCH_SIZE_KEY } from 'src/constants';
import { InvalidOptionError } from 'src/errors';

/**
 * Validates batchSize is valid
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateBatchSize(config) {
  const batchSize = config[BATCH_SIZE_KEY];

  if (!Number.isInteger(batchSize)) {
    throw new InvalidOptionError(BATCH_SIZE_KEY);
  }

  return {
    ...config,
  };
}
