import path from 'path';
import getFilesFromDirectories from '../getFilesFromDirectories';

const baseDir = './testAssets';
const subDir1 = path.resolve(baseDir, 'subDir');
const subDir2 = path.resolve(baseDir, 'subDir2');
const errPath = path.resolve(baseDir, 'foo');
const image3 = path.resolve(subDir1, '3.jpg');
const image4 = path.resolve(subDir2, '4.jpg');
const image6 = path.resolve(subDir1, 'anotherSubDir/6.jpg');

describe('src/lib/fsHelpers/getFilesFromDirectories', () => {
  test('should resolve files in directories but not subdirectories', () => {
    const directories = [
      subDir1,
      subDir2,
    ];
    const recursive = false;
    const expected = [
      image3,
      image4,
    ];
    const result = getFilesFromDirectories(directories, recursive);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected.sort());
  });

  test('should resolve files in directories and subdirectories with recursive true', () => {
    const directories = [
      subDir1,
      subDir2,
    ];
    const recursive = true;
    const expected = [
      image3,
      image4,
      image6,
    ];
    const result = getFilesFromDirectories(directories, recursive);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected.sort());
  });

  test('should reject if a directory is inaccessible', () => {
    const directories = [
      subDir1,
      errPath,
    ];
    const recursive = true;
    const result = getFilesFromDirectories(directories, recursive);

    expect.assertions(1);
    return expect(result).rejects.toThrow();
  });
});
