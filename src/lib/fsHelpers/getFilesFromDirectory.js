import path from 'path';
import readDirPaths from 'src/lib/fsHelpers/readDirPaths';
import isDirectory from 'src/lib/fsHelpers/isDirectory';

/**
 * Gets all files with full paths from a directory without any directories.
 * @param    {string}  directory Directory to search for files within.
 * @param    {bool}    recursive Whether or not to get files from sub directories.
 * @returns  {Promise}
 * @resolves {Array}             Resolves an Array of file paths
 */
export default async function getFilesFromDirectory(directory, recursive) {
  const allPaths = await readDirPaths(directory);
  const allFullPaths = Array.from(allPaths, relativePath => path.resolve(directory, relativePath));
  const files = [];
  const directoryCheckPromises = [];

  allFullPaths.forEach(fullPath => directoryCheckPromises.push(
    new Promise((resolve) => {
      isDirectory(fullPath)
        .then((isDir) => {
          if (!isDir) {
            resolve([fullPath]);
          } else if (recursive) {
            const dirName = fullPath.replace(/^.*[\\/]/, '');

            // don't recurse over dir's that start with "."
            if (dirName[0] !== '.') {
              getFilesFromDirectory(fullPath, recursive)
                .then(recursedFiles => resolve(recursedFiles));
            } else {
              // resolve empty array with dirs that start with "."
              resolve([]);
            }
          } else {
            // if the path is a directory but no recursive just resolve empty array
            resolve([]);
          }
        });
    }),
  ));

  const promiseResults = await Promise.all(directoryCheckPromises);
  return files
    .concat(...promiseResults)
    .sort();
}
