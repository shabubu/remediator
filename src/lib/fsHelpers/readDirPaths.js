import fs from 'fs';

/**
 * Promisified version of fs.readdir.
 * @param    {string}  directory Directory to read from.
 * @returns  {Promise}
 * @resolves {Array}
 * @rejects  {Error}
 */
export default function readDirPath(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(
      directory,
      (err, paths) => {
        if (err) {
          reject(err);
        } else {
          resolve(paths);
        }
      },
    );
  });
}
