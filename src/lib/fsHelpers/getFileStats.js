import fs from 'fs';

/**
 * Gets file stats (promisifies fs.stat).
 * @param    {string}  filePath File path to resolve stats of.
 * @returns  {Promise}
 * @resolves {object}           File stats.
 * @rejects  {Error}            File system error.
 */
export default function getFileStats(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(
      filePath,
      (error, stats) => {
        if (error) {
          reject(error);
        } else {
          resolve(stats);
        }
      },
    );
  });
}
