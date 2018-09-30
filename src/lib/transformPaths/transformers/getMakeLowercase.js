import getMake from 'src/lib/transformPaths/transformers/getMake';

/**
 * Generates camera make in all lowercase from meta data.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns camera make in all lowercase.
 */
export default function getMakeLowercase(fileMetaData) {
  return getMake(fileMetaData).toLowerCase();
}
