import path from 'path';
import {
  BATCH_SIZE_KEY,
  FORMAT_KEY,
  OUTPUT_DIRECTORY_KEY,
  RECURSIVE_KEY,
  RETURN_DATA_SOURCE_KEY,
  RETURN_DATA_OUTPUT_KEY,
  SOURCE_DIRECTORIES_KEY,
  SKIP_ERRORS_KEY,
  MODE_KEY,
  MODE_DRY,
  MODE_COPY,
  MODE_MOVE,
  RETURN_DATA_ERROR_KEY,
} from 'src/constants';
import { MissingOptionError } from 'src/errors';
import {
  copyFile,
  moveFile,
} from 'src/lib/fsHelpers';
import remediator from 'src';

jest.mock(
  'src/lib/fsHelpers/copyFile',
  () => (jest.fn(source => new Promise((resolve, reject) => {
    // eslint-disable-next-line global-require
    if (source === require('path').resolve('./testAssets/.hiddenDir/5.jpg')) {
      reject(new Error());
    } else {
      resolve();
    }
  }))),
);
jest.mock(
  'src/lib/fsHelpers/moveFile',
  () => (jest.fn(() => new Promise(resolve => resolve()))),
);

describe('Remediator integration tests', () => {
  describe('Error handling', () => {
    const outputDir = './testAssets/.hiddenDir';
    const options = {
      [OUTPUT_DIRECTORY_KEY]: outputDir,
      [SOURCE_DIRECTORIES_KEY]: outputDir,
      [MODE_KEY]: MODE_COPY,
    };
    const image5Output = path.resolve(outputDir, '2000/06. June/06 Tuesday/2000.06.06 06.00.jpg');
    const image5Source = path.resolve(outputDir, '5.jpg');

    test('should reject error when required options not passed in', () => {
      expect.assertions(1);
      return expect(remediator())
        .rejects
        .toEqual(new MissingOptionError(OUTPUT_DIRECTORY_KEY));
    });

    test('should successfully resolve and add error if problem moving/copying and skipErrors is enabled', async () => {
      const result = await remediator({
        ...options,
        [SKIP_ERRORS_KEY]: true,
      });
      const errorExpected = [{
        [RETURN_DATA_SOURCE_KEY]: image5Source,
        [RETURN_DATA_ERROR_KEY]: new Error(),
        [RETURN_DATA_OUTPUT_KEY]: image5Output,
      }];

      expect.assertions(2);
      expect(copyFile).toBeCalledWith(
        image5Source,
        image5Output,
      );
      expect(result).toEqual(errorExpected);
    });

    test('should reject error when skipErrors is not on and error encountered copying/moving', () => {
      const result = remediator(options);

      expect.assertions(1);
      return expect(result)
        .rejects
        .toThrow();
    });
  });

  describe('Full integration tests', () => {
    const sourceDir = './testAssets';
    const outputDir = './testAssets/.hiddenDir';
    const baseOptions = {
      [OUTPUT_DIRECTORY_KEY]: outputDir,
      [SOURCE_DIRECTORIES_KEY]: sourceDir,
    };
    const image1Output = path.resolve(outputDir, '2000/01. January/01 Saturday/2000.01.01 01.00.jpg');
    const image2Output = path.resolve(outputDir, '2000/02. February/02 Wednesday/2000.02.02 02.00.jpg');
    const defaultExpected = [
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/1.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image1Output,
      },
      {
        [RETURN_DATA_SOURCE_KEY]: path.resolve('./testAssets/2.jpg'),
        [RETURN_DATA_OUTPUT_KEY]: image2Output,
      },
    ];

    test('should successfully resolve return objects using custom config values', () => {
      const baseOutput = path.resolve(baseOptions[OUTPUT_DIRECTORY_KEY]);
      const options = {
        ...baseOptions,
        [BATCH_SIZE_KEY]: 2,
        [FORMAT_KEY]: ':YYYY:: -Make-: :Width:x:Height:.:Ext:',
        [RECURSIVE_KEY]: true,
        [SKIP_ERRORS_KEY]: true,
        [MODE_KEY]: MODE_DRY,
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

    test('should successfully resolve return objects using default config values in dry mode', () => {
      const dryOptions = {
        ...baseOptions,
        [MODE_KEY]: MODE_DRY,
      };
      const result = remediator(dryOptions);

      expect.assertions(1);
      return expect(result)
        .resolves
        .toEqual(defaultExpected);
    });

    test('should successfully resolve return objects and copy files using default config values in copy mode', async () => {
      const copyOptions = {
        ...baseOptions,
        [MODE_KEY]: MODE_COPY,
      };
      const result = await remediator(copyOptions);

      expect.assertions(3);
      expect(copyFile).toBeCalledWith(
        defaultExpected[0][RETURN_DATA_SOURCE_KEY],
        defaultExpected[0][RETURN_DATA_OUTPUT_KEY],
      );
      expect(copyFile).toBeCalledWith(
        defaultExpected[1][RETURN_DATA_SOURCE_KEY],
        defaultExpected[1][RETURN_DATA_OUTPUT_KEY],
      );
      expect(result).toEqual(defaultExpected);
    });

    test('should successfully resolve return objects and move files using default config values in move mode', async () => {
      const moveOptions = {
        ...baseOptions,
        [MODE_KEY]: MODE_MOVE,
      };
      const result = await remediator(moveOptions);

      expect.assertions(3);
      expect(moveFile).toBeCalledWith(
        defaultExpected[0][RETURN_DATA_SOURCE_KEY],
        defaultExpected[0][RETURN_DATA_OUTPUT_KEY],
      );
      expect(moveFile).toBeCalledWith(
        defaultExpected[1][RETURN_DATA_SOURCE_KEY],
        defaultExpected[1][RETURN_DATA_OUTPUT_KEY],
      );
      expect(result).toEqual(defaultExpected);
    });
  });
});
