import fs from 'fs';

/**
 * Checks if path is a directory.
 * @param    {string}  path Path to test.
 * @returns  {Promise}
 * @resolves {boolean}      Resolves true if directory, else false.
 * @rejects  {Error}
 */
export default async function isDirectory(path) {
  return new Promise((resolve, reject) => {
    fs.stat(
      path,
      (err, stats) => {
        if (err) {
          reject(err);
        }

        resolve(!!stats && stats.isDirectory());
      },
    );
  });
}
