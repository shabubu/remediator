import path from 'path';
import remediator from 'src';
import {
  OUTPUT_DIRECTORY_KEY,
  SOURCE_DIRECTORIES_KEY,
  RECURSIVE_KEY,
  FORMAT_KEY,
} from 'src/constants';
import { MissingOptionError } from 'src/errors';

describe('Remediator integration tests', () => {
  test('should reject error when required options not passed in', () => {
    expect.assertions(1);
    return expect(remediator())
      .rejects
      .toEqual(new MissingOptionError(OUTPUT_DIRECTORY_KEY));
  });

  test('should successfully resolve using default config values', () => {
    const sourceDir = './testAssets';
    const outputDir = './testAssets';
    const options = {
      [OUTPUT_DIRECTORY_KEY]: sourceDir,
      [SOURCE_DIRECTORIES_KEY]: outputDir,
      [FORMAT_KEY]: ': Day :.:Ext:',
      [RECURSIVE_KEY]: true,
    };
    const expected = [
      path.resolve(sourceDir, '1.jpg'),
      path.resolve(sourceDir, '2.jpg'),
      path.resolve(sourceDir, 'subDir/3.jpg'),
      path.resolve(sourceDir, 'subDir2/4.jpg'),
      path.resolve(sourceDir, 'subDir/anotherSubDir/6.jpg'),
    ];

    expect.assertions(1);
    return expect(remediator(options))
      .resolves
      .toEqual(expected.sort());
  });
});
