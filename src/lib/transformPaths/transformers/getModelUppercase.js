import getModel from 'src/lib/transformPaths/transformers/getModel';

/**
 * Generates camera model in all uppercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera model in all uppercase.
 */
export default function getModelUppercase(fileMetaData) {
  return getModel(fileMetaData).toUpperCase();
}
