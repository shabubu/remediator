import getExifToolInstance from 'src/lib/exifTool/getExifToolInstance';

/**
 * Opens exiftool process to allow reading of metadata.
 * @returns  {Promise}
 * @resolves {Number}  Process ID of exiftool.
 */
export default function openExifToolProcess() {
  const exifTool = getExifToolInstance();

  return exifTool.open();
}
