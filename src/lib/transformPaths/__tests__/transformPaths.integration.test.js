import path from 'path';
import {
  BATCH_SIZE_KEY,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import buildConfig from 'src/lib/buildConfig';
import { getFilesFromDirectories } from 'src/lib/fsHelpers';
import transformPaths from 'src/lib/transformPaths';

const imageOutputBase = path.resolve('./testAssets/.hiddenDir/2000');
const image1Output = path.join(imageOutputBase, '/01. January/01 Saturday/2000.01.01 01.00.jpg');
const image2Output = path.join(imageOutputBase, '/02. February/02 Wednesday/2000.02.02 02.00.jpg');
const image3Output = path.join(imageOutputBase, '/01. January/01 Saturday/2000.01.01 01.00 (2).jpg');

describe('src/lib/transformPaths integration tests', () => {
  test('should resolve objects with unique file paths in output', async () => {
    const config = await buildConfig({
      [SOURCE_DIRECTORIES_KEY]: [
        './testAssets',
        './testAssets/subDir',
      ],
      [OUTPUT_DIRECTORY_KEY]: './testAssets/.hiddenDir',
      [BATCH_SIZE_KEY]: 2,
    });
    const sourceFiles = await getFilesFromDirectories(
      config[SOURCE_DIRECTORIES_KEY],
      config[RECURSIVE_KEY],
    );
    const expected = [
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/1.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image1Output,
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/2.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image2Output,
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/subDir/3.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image3Output,
      },
    ];
    const results = await transformPaths(config, sourceFiles);

    expect.assertions(1);
    expect(results).toEqual(expected);
  });
});
