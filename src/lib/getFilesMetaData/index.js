import getFileMetaData from 'src/lib/getFilesMetaData/getFileMetaData';

/**
 * Builds metadata for files provided.
 * @param    {object} config    Remediator config object.
 * @param    {Array}  filePaths Files to build metadata from.
 * @returns  {Promise}
 * @resolves {Array}            Resolves array of remediator metadata objects.
 */
export default function getFilesMetaData(config, filePaths) {
  const metaDataPromises = [];

  filePaths.forEach(filePath => metaDataPromises.push(
    getFileMetaData(config, filePath),
  ));

  return Promise.all(metaDataPromises);
}
