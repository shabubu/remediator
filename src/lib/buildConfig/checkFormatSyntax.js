import {
  ALL_TRANSFORMERS,
  FORMAT_KEY,
  FORMAT_SEPARATOR,
  TRANSFORMER_ACTIONS_KEY,
  TRANSFORMER_NAME_KEY,
  TRANSFORMER_REPLACE_STRING_KEY,
} from 'src/constants';
import {
  MissingFormatSeparatorError,
  TransformerMissingError,
} from 'src/errors';

// we sort the transformers so longer names are tried first
const SORTED_TRANSFORMERS = ALL_TRANSFORMERS.sort((a, b) => b.length - a.length);

/**
 * Checks the syntax of the format string and builds transformer objects from it.
 * @param   {object} config Remediator config object
 * @returns {object}        Remediator config object with transformer objects added
 * @throws  {MissingFormatSeparatorError|TransformerMissingError}
 */
export default function checkFormatSyntax(config) {
  const format = config[FORMAT_KEY];
  const regEx = new RegExp(FORMAT_SEPARATOR, 'g');
  const separatorCount = (format.match(regEx)).length;
  const transformers = [];

  // check for odd count of separators (each transformer requires 2
  if (separatorCount % 2 === 1) {
    throw new MissingFormatSeparatorError(format);
  }

  // check for valid transformers, and build transformer objects.
  let startKey = -1;
  let endKey;
  Array.from(format).forEach((char, formatKey) => {
    const isSeparator = char === FORMAT_SEPARATOR;
    const startKeySet = startKey !== -1;
    endKey = isSeparator && startKeySet ? formatKey : null;
    startKey = isSeparator && !startKeySet ? formatKey : startKey;

    // build transformer action object when we have start and end
    if (
      startKeySet
      && endKey
    ) {
      const replaceString = format.substring(startKey, endKey + 1);
      // get which transformer is being used
      const transformer = SORTED_TRANSFORMERS.find(tf => replaceString.indexOf(tf) !== -1);

      if (!transformer) {
        throw new TransformerMissingError(replaceString);
      }

      transformers.push({
        [TRANSFORMER_NAME_KEY]: transformer,
        [TRANSFORMER_REPLACE_STRING_KEY]: replaceString,
      });

      // reset startKey
      startKey = -1;
    }
  });

  return {
    ...config,
    [TRANSFORMER_ACTIONS_KEY]: transformers,
  };
}
