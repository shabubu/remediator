import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

/**
 * Moves a file from a source location to target location.
 * @param    {string}    source Source file to move.
 * @param    {string}    target Target destination for file.
 * @returns  {Promise}
 * @resolves {undefined}        Resolves nothing when successful
 * @rejects  {Error}            Rejects errors creating directories or moving file.
 */
export default function moveFile(source, target) {
  return new Promise((resolve, reject) => {
    const { dir } = path.parse(target);

    mkdirp(dir, (err) => {
      if (err) {
        reject(err);
      } else {
        fs.rename(source, target, (renameError) => {
          if (renameError) {
            reject(renameError);
          } else {
            resolve();
          }
        });
      }
    });
  });
}
