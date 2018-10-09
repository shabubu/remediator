import path from 'path';
import {
  FORMAT_KEY,
  LIB_ERROR_KEY,
  LIB_ORIGINAL_FILE_PATH,
  OUTPUT_DIRECTORY_KEY,
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
  TRANSFORMER_ACTIONS_KEY,
  TRANSFORMER_NAME_KEY,
  TRANSFORMER_REPLACE_STRING_KEY,
} from 'src/constants';
import transformers from 'src/lib/transformPaths/transformers';

/**
 * "Transforms" file meta data into new file path.
 * @param   {object} config       Remediator config object.
 * @param   {object} fileMetaData File Remediator metadata object.
 * @returns {object}              Returns object with source filename and transformed output.
 */
export default function transformPathFromMetaData(config, fileMetaData) {
  const returnData = {
    [RETURN_DATA_SOURCE_KEY]: fileMetaData[LIB_ORIGINAL_FILE_PATH],
  };

  // if there was previously an error we want to skip over generating a path
  if (fileMetaData[LIB_ERROR_KEY]) {
    returnData[RETURN_DATA_ERROR_KEY] = fileMetaData[LIB_ERROR_KEY];
  } else {
    let newPath = config[FORMAT_KEY];
    const transformerActions = config[TRANSFORMER_ACTIONS_KEY];

    transformerActions.forEach((action) => {
      const transformer = action[TRANSFORMER_NAME_KEY];
      const transformResult = transformers[transformer](fileMetaData);
      let replace = '';

      if (transformResult) {
        replace = action[TRANSFORMER_REPLACE_STRING_KEY].replace(
          action[TRANSFORMER_NAME_KEY],
          transformResult,
        );
      }

      newPath = newPath.replace(
        action[TRANSFORMER_REPLACE_STRING_KEY],
        replace,
      );
    });

    newPath = newPath.replace(/:/g, '');

    returnData[RETURN_DATA_OUTPUT_KEY] = path.join(config[OUTPUT_DIRECTORY_KEY], newPath);
  }

  return returnData;
}
