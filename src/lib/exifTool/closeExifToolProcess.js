import getExifToolInstance from 'src/lib/exifTool/getExifToolInstance';

/**
 * Closes exiftool process.
 * @returns  {Promise}
 * @resolves {undefined}
 */
export default function closeExifToolProcess() {
  const exifTool = getExifToolInstance();

  return exifTool.close();
}
