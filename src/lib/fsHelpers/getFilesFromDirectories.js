import getFilesFromDirectory from './getFilesFromDirectory';

/**
 * Gets all files in all directories
 * @param    {Array}   directories All directories to get files from.
 * @param    {bool}    recursive   Whether or not get files in sub directories.
 * @returns  {Promise}
 * @resolves {Array}               Array of file paths.
 */
export default async function getFilesFromDirectories(directories, recursive) {
  const directoryPromises = [];
  const files = [];

  directories.forEach(
    directory => directoryPromises.push(
      new Promise(resolve => resolve(getFilesFromDirectory(directory, recursive))),
    ),
  );

  const promiseResults = await Promise.all(directoryPromises);
  return files
    .concat(...promiseResults)
    .sort();
}
