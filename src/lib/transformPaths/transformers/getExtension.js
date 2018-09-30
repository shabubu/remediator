import { LIB_ORIGINAL_FILE_PATH } from 'src/constants/metaData';

/**
 * Gets current extension on source file.
 * @param   {object} fileMetaData Remediator meta data object.
 * @returns {string}              Returns original extension format.
 */
export default function getExtension(fileMetaData) {
  const fileParts = fileMetaData[LIB_ORIGINAL_FILE_PATH].split('.');

  return fileParts[fileParts.length - 1];
}
