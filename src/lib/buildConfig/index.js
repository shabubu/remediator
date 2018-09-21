import checkRequired from 'src/lib/buildConfig/checkRequired';
import addDefaultValues from 'src/lib/buildConfig/addDefaultValues';
import validateKeysDataTypes from 'src/lib/buildConfig/validateKeysDataTypes';
import checkDirectoriesAccess from 'src/lib/buildConfig/checkDirectoriesAccess';
import checkFormatSyntax from 'src/lib/buildConfig/checkFormatSyntax';
import checkModeValue from 'src/lib/buildConfig/checkModeValue';

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
  config = checkModeValue(config);
  config = await checkDirectoriesAccess(config);

  return config;
}
