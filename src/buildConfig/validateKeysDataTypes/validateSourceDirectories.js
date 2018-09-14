import path from 'path';
import { SOURCE_DIRECTORIES_KEY } from '../../constants';
import { InvalidOptionError } from '../../errors';

/**
 * Validates data types for sources and checks .
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 * @throws  {InvalidOptionError}
 */
export default function validateSourceDirectories(config) {
  const configSource = config[SOURCE_DIRECTORIES_KEY];
  const isString = typeof configSource === typeof '';
  const sources = isString ? [configSource] : configSource;
  const validatedSources = [];

  // check for non empty array
  if (
    !Array.isArray(sources)
    || !sources.length
  ) {
    throw new InvalidOptionError(SOURCE_DIRECTORIES_KEY);
  }

  sources.forEach((source) => {
    if (
      typeof source !== typeof ''
      || !source.length
    ) {
      throw new InvalidOptionError(SOURCE_DIRECTORIES_KEY);
    }

    validatedSources.push(path.resolve(source));
  });

  return {
    ...config,
    [SOURCE_DIRECTORIES_KEY]: validatedSources,
  };
}
