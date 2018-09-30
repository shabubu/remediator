import getOrientation from 'src/lib/transformPaths/transformers/getOrientation';

/**
 * Generates camera orientation in all uppercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera orientation in all uppercase.
 */
export default function getOrientationUppercase(fileMetaData) {
  return getOrientation(fileMetaData).toUpperCase();
}
