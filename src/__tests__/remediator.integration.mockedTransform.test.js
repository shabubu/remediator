import path from 'path';
import {
  MODE_COPY,
  MODE_KEY,
  OUTPUT_DIRECTORY_KEY,
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_SOURCE_KEY,
  SKIP_ERRORS_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import { copyFile } from 'src/lib/fsHelpers';
import remediator from 'src';

jest.mock('src/lib/transformPaths', () => (
  () => new Promise(resolve => resolve([{
    // eslint-disable-next-line global-require
    source: require('path').resolve('./testAssets/.hiddenDir/5.jpg'),
    error: new Error(),
  }]))
));
jest.mock('src/lib/fsHelpers/copyFile', () => (
  jest.fn(() => Promise.resolve())
));

describe('Remediator dependencies error handling integration tests', () => {
  const outputDir = './testAssets/.hiddenDir';

  test('should successfully resolve return objects but not copy/move if previous error found on object', async () => {
    const copyOptions = {
      [OUTPUT_DIRECTORY_KEY]: outputDir,
      [SOURCE_DIRECTORIES_KEY]: outputDir,
      [MODE_KEY]: MODE_COPY,
      [SKIP_ERRORS_KEY]: true,
    };
    const errorExpected = [{
      [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/.hiddenDir/5.jpg'),
      [RETURN_DATA_ERROR_KEY]: new Error(),
    }];
    const result = await remediator(copyOptions);

    expect.assertions(2);
    expect(copyFile).not.toHaveBeenCalled();
    expect(result).toEqual(errorExpected);
  });
});
