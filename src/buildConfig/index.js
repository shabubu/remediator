import checkRequired from './checkRequired';
import addDefaultValues from './addDefaultValues';

/**
 * Takes in library options and builds and validates final config object.
 * @param   {object} options Options object to build config object from.
 * @returns {object}
 */
export default function buildConfig(options) {
  checkRequired(options);

  return addDefaultValues(options);
}
