import { exiftool } from 'exiftool-vendored';
import path from 'path';
import {
  EXIFTOOL_KEY,
  FORMAT_KEY,
  LIB_ERROR_KEY,
  LIB_ORIGINAL_FILE_PATH,
  OUTPUT_DIRECTORY_KEY,
  RETURN_DATA_ERROR_KEY,
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
      [EXIFTOOL_KEY]: exiftool,
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
      [EXIFTOOL_KEY]: exiftool,
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

  test('should return object with original path and error if error in metadata', async () => {
    const output = './';
    const source = './testAssets';
    const config = await buildConfig({
      [EXIFTOOL_KEY]: exiftool,
      [OUTPUT_DIRECTORY_KEY]: output,
      [SOURCE_DIRECTORIES_KEY]: source,
    });
    const filePath = path.join(config[SOURCE_DIRECTORIES_KEY][0], '1.jpg');
    const metaData = {
      [LIB_ERROR_KEY]: new Error(),
      [LIB_ORIGINAL_FILE_PATH]: filePath,
    };
    const expected = {
      [RETURN_DATA_ERROR_KEY]: metaData[LIB_ERROR_KEY],
      [RETURN_DATA_SOURCE_KEY]: metaData[[LIB_ORIGINAL_FILE_PATH]],
    };
    const result = transformPathFromMetaData(config, metaData);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
