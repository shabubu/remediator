import validateRecursive from './validateRecursive';
import validateOutputDirectory from './validateOutputDirectory';
import validateSourceDirectories from './validateSourceDirectories';
import validateFormat from './validateFormat';

/**
 * Validates data types for all keys in Remediator config object.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object
 */
export default function validateKeysDataTypes(config) {
  let validatedConfig;

  validatedConfig = validateRecursive(config);
  validatedConfig = validateOutputDirectory(validatedConfig);
  validatedConfig = validateSourceDirectories(validatedConfig);
  validatedConfig = validateFormat(validatedConfig);

  return validatedConfig;
}
