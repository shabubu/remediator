import fs from 'fs';

/**
 * Checks if a path is accessible.
 * @param {string} path    Directory or file path.
 * @returns {Promise<any>} Resolves if true, rejects fs error if unable to access.
 */
export default function pathIsAccessible(path) {
  return new Promise((resolve, reject) => {
    fs.access(
      path,
      (error) => {
        if (error) {
          reject(error);
        }

        resolve(true);
      },
    );
  });
}
