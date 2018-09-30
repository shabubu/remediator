import getOrientation from 'src/lib/transformPaths/transformers/getOrientation';

/**
 * Generates camera orientation in all lowercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera orientation in all lowercase.
 */
export default function getOrientationLowercase(fileMetaData) {
  return getOrientation(fileMetaData).toLowerCase();
}
