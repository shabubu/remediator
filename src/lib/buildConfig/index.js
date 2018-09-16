import checkRequired from './checkRequired';
import addDefaultValues from './addDefaultValues';
import validateKeysDataTypes from './validateKeysDataTypes';
import checkDirectoriesAccess from './checkDirectoriesAccess';
import checkFormatSyntax from './checkFormatSyntax';

/**
 * Takes in library options and builds and validates final config object.
 * @param   {object} options Options object to build config object from.
 * @returns {object}         Final Remediator config.
 */
export default async function buildConfig(options) {
  let config;

  checkRequired(options);
  config = addDefaultValues(options);
  config = validateKeysDataTypes(config);
  config = checkFormatSyntax(config);
  config = await checkDirectoriesAccess(config);

  return config;
}
