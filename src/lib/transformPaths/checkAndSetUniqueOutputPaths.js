import fs from 'fs';
import path from 'path';
import {
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_OUTPUT_KEY,
} from 'src/constants';

/**
 * Checks output filepaths for uniqueness and updates output path if not unique.
 * @param   {Array} transformObjects Return objects with source and output paths.
 * @returns {Array}                  Returns object with unique source filename and output.
 */
export default function checkAndSetUniqueOutputPaths(transformObjects) {
  const transforms = [...transformObjects];
  const existingPaths = {};

  for (let i = 0; i < transforms.length; i += 1) {
    // if there was a previous error we want to skip over it
    if (!transforms[i][RETURN_DATA_ERROR_KEY]) {
      let finalOutput = transforms[i][RETURN_DATA_OUTPUT_KEY];

      if (
        existingPaths[finalOutput]
        || fs.existsSync(finalOutput)
      ) {
        const {
          dir,
          ext,
          name,
        } = path.parse(finalOutput);
        let exists = true;

        // start adding numbers on until unused path is found
        for (let newNumber = 1; exists; newNumber += 1) {
          finalOutput = path.resolve(dir, `${name} (${newNumber})${ext}`);

          if (
            !existingPaths[finalOutput]
            && !fs.existsSync(finalOutput)
          ) {
            exists = false;
          }

          existingPaths[finalOutput] = true;
        }
      }

      // always set original since it will always either exist or need to exist
      existingPaths[transforms[i][RETURN_DATA_OUTPUT_KEY]] = true;

      // set final output value
      transforms[i] = {
        ...transforms[i],
        [RETURN_DATA_OUTPUT_KEY]: finalOutput,
      };
    }
  }

  return transforms;
}
