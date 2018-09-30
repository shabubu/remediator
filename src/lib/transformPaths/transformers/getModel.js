import { LIB_MODEL_KEY } from 'src/constants/metaData';

/**
 * Generates camera model from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera model.
 */
export default function getModel(fileMetaData) {
  return fileMetaData[LIB_MODEL_KEY] || '';
}
