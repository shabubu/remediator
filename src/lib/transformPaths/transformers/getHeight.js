import { LIB_RESOLUTION_KEY } from 'src/constants/metaData';

/**
 * Generates pixel height from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns pixel height of file.
 */
export default function getHeight(fileMetaData) {
  const resolution = fileMetaData[LIB_RESOLUTION_KEY] || '';
  const resolutionParts = resolution.split('x');

  return resolutionParts[1] || '';
}
