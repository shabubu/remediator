import getModel from 'src/lib/transformPaths/transformers/getModel';

/**
 * Generates camera model in all lowercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera model in all lowercase.
 */
export default function getModelLowercase(fileMetaData) {
  return getModel(fileMetaData).toLowerCase();
}
