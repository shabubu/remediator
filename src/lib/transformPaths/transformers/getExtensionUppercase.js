import getExtension from 'src/lib/transformPaths/transformers/getExtension';

/**
 * Generates file extension in all uppercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns file extension in all uppercase.
 */
export default function getExtensionUppercasse(fileMetaData) {
  return getExtension(fileMetaData).toUpperCase();
}
