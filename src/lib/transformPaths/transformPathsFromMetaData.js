import transformPathFromMetaData from 'src/lib/transformPaths/transformPathFromMetaData';

/**
 * "Transforms" file meta data for multiple files into new file paths.
 * @param   {object} config        Remediator config object.
 * @param   {Array}  fileMetaDatas Array of Remediator metadata objects.
 * @returns {Array}                Array of objects with source and output transformations.
 */
export default function transformPathsFromMetaData(config, fileMetaDatas) {
  const transformedFiles = [];

  fileMetaDatas.forEach(
    metaData => transformedFiles.push(
      transformPathFromMetaData(config, metaData),
    ),
  );

  return transformedFiles;
}
