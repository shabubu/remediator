import path from 'path';
import isDirectory from 'src/lib/fsHelpers/isDirectory';

const basePath = './testAssets';
const filePath = path.resolve(basePath, '1.jpg');
const errPath = path.resolve(basePath, 'foo');

describe('src/lib/fsHelpers/isDirectory', () => {
  test('should resolve true if path is directory', () => {
    const expected = true;
    const result = isDirectory(basePath);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected);
  });

  test('should resolve false if path is a file', () => {
    const expected = false;
    const result = isDirectory(filePath);

    expect.assertions(1);
    return expect(result).resolves.toEqual(expected);
  });

  test('should reject if path does not exist', () => {
    const result = isDirectory(errPath);

    expect.assertions(1);
    return expect(result).rejects.toThrow();
  });
});
