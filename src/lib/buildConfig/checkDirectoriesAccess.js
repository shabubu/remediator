import { pathHasReadWrite } from '../fsHelpers';
import { InAccessiblePathError } from '../../errors';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
} from '../../constants';

/**
 * Checks that output and source directories have r+w access.
 * @param   {object} config Remediator config object
 * @async
 * @returns {object}        Remediator config object
 * @throws  {InAccessiblePathError}
 */
export default async function checkDirectoriesAccess(config) {
  const dirPromises = [];
  const checkAccessPromise = directory => new Promise(async (resolve, reject) => {
    try {
      await pathHasReadWrite(directory);
      resolve();
    } catch (error) {
      reject(new InAccessiblePathError(directory));
    }
  });

  // check output
  dirPromises.push(checkAccessPromise(config[OUTPUT_DIRECTORY_KEY]));

  // check source directories
  config[SOURCE_DIRECTORIES_KEY].forEach((source) => {
    dirPromises.push(checkAccessPromise(source));
  });

  await Promise.all(dirPromises);

  return {
    ...config,
  };
}
