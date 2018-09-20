import path from 'path';
import getFilesFromDirectory from '../getFilesFromDirectory';

const baseDir = './testAssets';
const errPath = path.resolve(baseDir, 'foo');
const image1 = path.resolve(baseDir, '1.jpg');
const image2 = path.resolve(baseDir, '2.jpg');
const image3 = path.resolve(baseDir, 'subDir/3.jpg');
const image4 = path.resolve(baseDir, 'subDir2/4.jpg');

describe('src/lib/fsHelpers/getFilesFromDirectory', () => {
  test('should resolve files in directory but not subdirectories', () => {
    const recursive = false;
    const expected = [
      image1,
      image2,
    ];
    const result = getFilesFromDirectory(baseDir, recursive);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected.sort());
  });

  test('should resolve files in directories and subdirectories except directories starting with "."', () => {
    const recursive = true;
    const expected = [
      image1,
      image2,
      image3,
      image4,
    ];
    const result = getFilesFromDirectory(baseDir, recursive);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected.sort());
  });

  test('should reject if directory does not exist', () => {
    const recursive = false;
    const result = getFilesFromDirectory(errPath, recursive);

    expect.assertions(1);
    return expect(result).rejects.toThrow();
  });
});
