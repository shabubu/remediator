import fs from 'fs';

/**
 * Checks if a path is writable.
 * @param    {string}  path Directory or file path.
 * @returns  {Promise}
 * @resolves {bool}         Resolves
 * @rejects  {Error}        Error from filesystem access attempt
 */
export default function pathHasReadWrite(path) {
  return new Promise((resolve, reject) => {
    fs.access(
      path,
      // eslint-disable-next-line no-bitwise
      fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
      (error) => {
        if (error) {
          reject(error);
        }

        resolve(true);
      },
    );
  });
}
