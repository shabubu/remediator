import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

/**
 * Copies a file from a source location to target location.
 * @param    {string}    source Source file to copy.
 * @param    {string}    target Target destination for copied file.
 * @returns  {Promise}
 * @resolves {undefined}        Resolves nothing when successful
 * @rejects  {Error}            Rejects errors creating directories or file.
 */
export default function copyFile(source, target) {
  return new Promise((resolve, reject) => {
    const { dir } = path.parse(target);

    mkdirp(dir, (err) => {
      if (err) {
        reject(err);
      } else {
        fs.copyFile(source, target, (copyError) => {
          if (copyError) {
            reject(copyError);
          } else {
            resolve();
          }
        });
      }
    });
  });
}
