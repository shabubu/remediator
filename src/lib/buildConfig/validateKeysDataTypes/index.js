import validateExiftool from 'src/lib/buildConfig/validateKeysDataTypes/validateExiftool';
import validateRecursive from 'src/lib/buildConfig/validateKeysDataTypes/validateRecursive';
import validateOutputDirectory from 'src/lib/buildConfig/validateKeysDataTypes/validateOutputDirectory';
import validateSkipErrors from 'src/lib/buildConfig/validateKeysDataTypes/validateSkipErrors';
import validateSourceDirectories from 'src/lib/buildConfig/validateKeysDataTypes/validateSourceDirectories';
import validateFormat from 'src/lib/buildConfig/validateKeysDataTypes/validateFormat';
import validateMode from 'src/lib/buildConfig/validateKeysDataTypes/validateMode';
import validateBatchSize from 'src/lib/buildConfig/validateKeysDataTypes/validateBatchSize';

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
  validatedConfig = validateMode(validatedConfig);
  validatedConfig = validateBatchSize(validatedConfig);
  validatedConfig = validateSkipErrors(validatedConfig);
  validatedConfig = validateExiftool(validatedConfig);

  return validatedConfig;
}
