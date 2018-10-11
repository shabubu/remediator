import path from 'path';
import remediator from 'src';
import {
  BATCH_SIZE_KEY,
  FORMAT_KEY,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  RETURN_DATA_SOURCE_KEY,
  RETURN_DATA_OUTPUT_KEY,
  SOURCE_DIRECTORIES_KEY,
  SKIP_ERRORS_KEY,
} from 'src/constants';
import { MissingOptionError } from 'src/errors';

describe('Remediator integration tests', () => {
  test('should reject error when required options not passed in', () => {
    expect.assertions(1);
    return expect(remediator())
      .rejects
      .toEqual(new MissingOptionError(OUTPUT_DIRECTORY_KEY));
  });

  test('should successfully resolve return objects using default config values', () => {
    const imageOutputBase = path.resolve('./testAssets/.hiddenDir/2000');
    const image1Output = path.join(imageOutputBase, '/01. January/01 Saturday/2000.01.01 01.00.jpg');
    const image2Output = path.join(imageOutputBase, '/02. February/02 Wednesday/2000.02.02 02.00.jpg');
    const sourceDir = './testAssets';
    const outputDir = './testAssets/.hiddenDir';
    const options = {
      [OUTPUT_DIRECTORY_KEY]: outputDir,
      [SOURCE_DIRECTORIES_KEY]: sourceDir,
    };
    const expected = [
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/1.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image1Output,
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/2.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image2Output,
      },
    ];
    const result = remediator(options);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });

  test('should successfully resolve return objects using custom config values', () => {
    const baseOutput = path.resolve('./testAssets/.hiddenDir');
    const sourceDir = './testAssets';
    const outputDir = './testAssets/.hiddenDir';
    const options = {
      [BATCH_SIZE_KEY]: 2,
      [FORMAT_KEY]: ':YYYY:: -Make-: :Width:x:Height:.:Ext:',
      [OUTPUT_DIRECTORY_KEY]: outputDir,
      [RECURSIVE_KEY]: true,
      [SKIP_ERRORS_KEY]: true,
      [SOURCE_DIRECTORIES_KEY]: sourceDir,
    };
    const expected = [
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/1.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: path.join(baseOutput, '2000 -A Camera Maker- 1x1.jpg'),
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/2.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: path.join(baseOutput, '2000 2x2.jpg'),
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/subDir2/4.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: path.join(baseOutput, '2000 2x2 (1).jpg'),
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/subDir/3.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: path.join(baseOutput, '2000 -A Camera Maker- 1x1 (1).jpg'),
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/subDir/anotherSubDir/6.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: path.join(baseOutput, '2000 6x6.jpg'),
      },
    ];
    const result = remediator(options);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(
        expect.arrayContaining(expected),
      );
  });
});
