import { SKIP_ERRORS_KEY } from 'src/constants';
import {
  EXIF_JPG_DEVICE_MAKE_KEY,
  EXIF_JPG_DEVICE_MODEL_KEY,
  EXIF_JPG_ORIENTATION_KEY,
  EXIF_JPG_RESOLUTION,
  LIB_DATE_KEY,
  LIB_ERROR_KEY,
  LIB_MAKE_KEY,
  LIB_MODEL_KEY,
  LIB_ORIENTATION_KEY,
  LIB_ORIGINAL_FILE_PATH,
  LIB_RESOLUTION_KEY,
} from 'src/constants/metaData';
import getExifToolMetaData from 'src/lib/getFilesMetaData/getExifToolMetaData';
import getFileSystemMetaData from 'src/lib/getFilesMetaData/getFileSystemMetaData';
import getOldestTimestamp from 'src/lib/getFilesMetaData/getOldestTimestamp';

/**
 * Gets the remediator meta data for transformers.
 * @param    {object}  config   Remediator config object.
 * @param    {string}  filePath File to build metadata from.
 * @returns  {Promise}
 * @resolves {object}           Object of metadata of file with error if skipping errors and error
 *                              encountered.
 * @rejects  {Error}            Rejects an error if not skipping errors and error encountered.
 */
export default async function getFileMetaData(config, filePath) {
  try {
    const fsMeta = await getFileSystemMetaData(filePath);
    const exifMeta = await getExifToolMetaData(filePath);
    const date = new Date(getOldestTimestamp(fsMeta, exifMeta));

    return {
      [LIB_DATE_KEY]: date,
      [LIB_MAKE_KEY]: exifMeta[EXIF_JPG_DEVICE_MAKE_KEY],
      [LIB_MODEL_KEY]: exifMeta[EXIF_JPG_DEVICE_MODEL_KEY],
      [LIB_ORIENTATION_KEY]: exifMeta[EXIF_JPG_ORIENTATION_KEY],
      [LIB_ORIGINAL_FILE_PATH]: filePath,
      [LIB_RESOLUTION_KEY]: exifMeta[EXIF_JPG_RESOLUTION],
    };
  } catch (error) {
    // return error in object if we are skipping errors
    if (config[SKIP_ERRORS_KEY]) {
      return {
        [LIB_ERROR_KEY]: error,
      };
    }

    throw error;
  }
}
