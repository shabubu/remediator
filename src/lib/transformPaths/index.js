import transformPath from 'src/lib/transformPaths/transformPath';

/**
 * "Transforms" file meta data for multiple files into new file paths.
 * @param   {object} config        8Remediator config object.
 * @param   {Array}  fileMetaDatas Array of Remediator metadata objects.
 * @returns {Array}                Array of objects with source and output transformations.
 */
export default function transformPaths(config, fileMetaDatas) {
  const transformedFiles = [];

  fileMetaDatas.forEach(
    metaData => transformedFiles.push(
      transformPath(config, metaData),
    ),
  );

  return transformedFiles;
}
