import path from 'path';
import {
  FORMAT_KEY,
  OUTPUT_DIRECTORY_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import buildConfig from 'src/lib/buildConfig';
import getFileMetaData from 'src/lib/getFilesMetaData/getFileMetaData';
import transformPathFromMetaData from 'src/lib/transformPaths/transformPathFromMetaData';

describe('src/lib/transformPaths/transformPathFromMetaData', () => {
  test('should return object with original file path and transformed path', async () => {
    const output = './';
    const source = './testAssets';
    const config = await buildConfig({
      [OUTPUT_DIRECTORY_KEY]: output,
      [SOURCE_DIRECTORIES_KEY]: source,
    });
    const filePath = path.join(config[SOURCE_DIRECTORIES_KEY][0], '1.jpg');
    const metaData = await getFileMetaData(config, filePath);
    const expected = {
      [RETURN_DATA_OUTPUT_KEY]: path.join(
        config[OUTPUT_DIRECTORY_KEY],
        '2000/01. January/01 Saturday/2000.01.01 01.00.jpg',
      ),
      [RETURN_DATA_SOURCE_KEY]: filePath,
    };
    const result = transformPathFromMetaData(config, metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return object with transformed path that had a empty transformer', async () => {
    const output = './';
    const source = './testAssets';
    const config = await buildConfig({
      [OUTPUT_DIRECTORY_KEY]: output,
      [SOURCE_DIRECTORIES_KEY]: source,
      [FORMAT_KEY]: ':-YYYY-::-Model-:.:Ext:',
    });
    const filePath = path.join(config[SOURCE_DIRECTORIES_KEY][0], '2.jpg');
    const metaData = await getFileMetaData(config, filePath);
    const expected = {
      [RETURN_DATA_OUTPUT_KEY]: path.join(
        config[OUTPUT_DIRECTORY_KEY],
        '-2000-.jpg',
      ),
      [RETURN_DATA_SOURCE_KEY]: filePath,
    };
    const result = transformPathFromMetaData(config, metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
