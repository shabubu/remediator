import buildConfig from './buildConfig';
import validateConfig from './validateConfig';

/**
 * Reorganizes media files based off meta data.
 * @param   {object} options Remediator options object.
 * @returns {object}         Returns config object (temporary).
 */
export default async function remediator(options = {}) {
  const config = buildConfig(options);
  await validateConfig(config);

  return config;
}
