import path from 'path';
import { OUTPUT_DIRECTORY_KEY } from '../../constants';
import { InvalidOptionError } from '../../errors';

/**
 * Validates the output directory is proper data type and not empty.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateOutputDirectory(config) {
  const outputPath = config[OUTPUT_DIRECTORY_KEY];

  if (
    !outputPath
    || typeof outputPath !== typeof ''
  ) {
    throw new InvalidOptionError(OUTPUT_DIRECTORY_KEY);
  }

  return {
    ...config,
    [OUTPUT_DIRECTORY_KEY]: path.resolve(outputPath),
  };
}
