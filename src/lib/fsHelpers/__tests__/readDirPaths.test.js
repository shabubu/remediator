import fs from 'fs';
import path from 'path';
import readDirPaths from 'src/lib/fsHelpers/readDirPaths';

const baseDir = path.resolve('./testAssets');
let files;

describe('src/lib/fsHelpers/readDirPaths', () => {
  // to be OS agnostic we will get the actual files (instead of a mock)
  beforeAll((done) => {
    fs.readdir(baseDir, (err, paths) => {
      files = paths;
      done();
    });
  });

  test('should resolve all files and directories in path', () => {
    const expected = files;
    const result = readDirPaths(baseDir);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected);
  });

  test('should reject if the path does not exist', () => {
    const directory = path.resolve(baseDir, 'foo');
    const result = readDirPaths(directory);

    expect.assertions(1);
    return expect(result).rejects.toThrow();
  });
});
