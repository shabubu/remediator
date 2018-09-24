import exifTool from 'node-exiftool';
import exifToolBin from 'dist-exiftool';

let instance;

/**
 * Gets singleton instance of exiftool.
 * @returns {object} Returns exiftool instance.
 */
export default function getExifToolInstance() {
  if (!instance) {
    instance = new exifTool.ExiftoolProcess(exifToolBin);
  }

  return instance;
}
