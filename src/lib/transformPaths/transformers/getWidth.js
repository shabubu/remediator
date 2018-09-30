import { LIB_RESOLUTION_KEY } from 'src/constants/metaData';

/**
 * Generates pixel width from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {number}              Returns pixel width of file.
 */
export default function getWidth(fileMetaData) {
  const resolution = fileMetaData[LIB_RESOLUTION_KEY] || '';
  const [width] = resolution.split('x');

  return width || '';
}
