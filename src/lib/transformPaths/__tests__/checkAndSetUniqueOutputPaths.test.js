import path from 'path';
import {
  RETURN_DATA_ERROR_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
} from 'src/constants';
import checkAndSetUniqueOutputPaths from 'src/lib/transformPaths/checkAndSetUniqueOutputPaths';

describe('src/lib/transformPaths/checkAndSetUniqueOutputPaths', () => {
  const image1 = path.resolve('./testAssets/1.jpg');
  const image3 = path.resolve('./testAssets/subDir/3.jpg');

  test('should keep one first filename but rename second to avoid cache and filesystem collisions', () => {
    const conflictPath = path.resolve('./testAssets/.hiddenDir/2000/01. January/01 Saturday/2000.01.01 01.00.jpg');
    const newImage3 = path.resolve('./testAssets/.hiddenDir/2000/01. January/01 Saturday/2000.01.01 01.00 (2).jpg');
    const transformObjects = [
      {
        [RETURN_DATA_SOURCE_KEY]: image1,
        [RETURN_DATA_OUTPUT_KEY]: conflictPath,
      },
      {
        [RETURN_DATA_SOURCE_KEY]: image3,
        [RETURN_DATA_OUTPUT_KEY]: conflictPath,
      },
    ];
    const expected = [
      {
        [RETURN_DATA_SOURCE_KEY]: image1,
        [RETURN_DATA_OUTPUT_KEY]: conflictPath,
      },
      {
        [RETURN_DATA_SOURCE_KEY]: image3,
        [RETURN_DATA_OUTPUT_KEY]: newImage3,
      },
    ];
    const result = checkAndSetUniqueOutputPaths(transformObjects);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should make no changes to a result object if error is present', () => {
    const transformObjects = [{
      [RETURN_DATA_SOURCE_KEY]: image1,
      [RETURN_DATA_ERROR_KEY]: new Error(),
    }];
    const expected = [...transformObjects];
    const result = checkAndSetUniqueOutputPaths(transformObjects);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
