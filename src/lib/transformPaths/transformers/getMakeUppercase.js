import getMake from 'src/lib/transformPaths/transformers/getMake';

/**
 * Generates camera make in all uppercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera make in all uppercase.
 */
export default function getMakeUppercase(fileMetaData) {
  return getMake(fileMetaData).toUpperCase();
}
