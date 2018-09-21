import buildConfig from 'src/lib/buildConfig';

/**
 * Reorganizes media files based off meta data.
 * @param   {object} options Remediator options object.
 * @returns {object}         Returns config object (temporary).
 */
export default function remediator(options = {}) {
  const config = buildConfig(options);

  return config;
}
