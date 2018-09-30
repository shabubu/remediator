import getExtension from 'src/lib/transformPaths/transformers/getExtension';

/**
 * Generates file extension in all lowercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns file extension in all lowercase.
 */
export default function getExtensionLowercase(fileMetaData) {
  return getExtension(fileMetaData).toLowerCase();
}
