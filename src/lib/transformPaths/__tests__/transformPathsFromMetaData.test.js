import path from 'path';
import { exiftool } from 'exiftool-vendored';
import {
  EXIFTOOL_KEY,
  FORMAT_KEY,
  OUTPUT_DIRECTORY_KEY,
  RETURN_DATA_OUTPUT_KEY,
  RETURN_DATA_SOURCE_KEY,
  SOURCE_DIRECTORIES_KEY,
} from 'src/constants';
import buildConfig from 'src/lib/buildConfig';
import getFileMetaData from 'src/lib/getFilesMetaData/getFileMetaData';
import transformPathsFromMetaData from 'src/lib/transformPaths/transformPathsFromMetaData';

describe('src/lib/transformPathsFromMetaData', () => {
  test('should return array of transformed path objects', async () => {
    const output = './';
    const source = './testAssets';
    const config = await buildConfig({
      [EXIFTOOL_KEY]: exiftool,
      [FORMAT_KEY]: ':YYYY:/:MM0:. :Month:/:DD0: :Day:/:YYYY:.:MM0:.:DD0: :HH0:.:MN0::-Model-:.:Ext:',
      [OUTPUT_DIRECTORY_KEY]: output,
      [SOURCE_DIRECTORIES_KEY]: source,
    });
    const filePath1 = path.join(config[SOURCE_DIRECTORIES_KEY][0], '1.jpg');
    const filePath2 = path.join(config[SOURCE_DIRECTORIES_KEY][0], '2.jpg');
    const metaData1 = await getFileMetaData(config, filePath1);
    const metaData2 = await getFileMetaData(config, filePath2);
    const expected = [
      {
        [RETURN_DATA_OUTPUT_KEY]: path.join(
          config[OUTPUT_DIRECTORY_KEY],
          '2000/01. January/01 Saturday/2000.01.01 01.00-A Camera Model-.jpg',
        ),
        [RETURN_DATA_SOURCE_KEY]: filePath1,
      },
      {
        [RETURN_DATA_OUTPUT_KEY]: path.join(
          config[OUTPUT_DIRECTORY_KEY],
          '2000/02. February/02 Wednesday/2000.02.02 02.00.jpg',
        ),
        [RETURN_DATA_SOURCE_KEY]: filePath2,
      },
    ];
    const result = transformPathsFromMetaData(
      config,
      [
        metaData1,
        metaData2,
      ],
    );

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
