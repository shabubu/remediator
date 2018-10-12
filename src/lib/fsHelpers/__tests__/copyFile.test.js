import path from 'path';
import { copyFile } from 'src/lib/fsHelpers';

jest.mock('fs');

describe('src/lib/fsHelpers/copyFile', () => {
  test('should resolve undefined when file is copied', () => {
    const source = path.resolve('./testAssets/1.jpg');
    const target = path.resolve('./newDirectory/newFile.jpg');
    const expected = undefined;
    const result = copyFile(source, target);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });

  test('should reject when mkdirp errors', () => {
    const source = path.resolve('./testAssets/1.jpg');
    const target = path.resolve('./testAssets/badMkdirp/1tornado.jpg');
    const result = copyFile(source, target);

    expect.assertions(1);
    return expect(result)
      .rejects
      .toThrow();
  });

  test('should reject on copy error', () => {
    const source = path.resolve('./testAssets/1.jpg');
    const target = path.resolve('./testAssets/badCopyDir/1.jpg');
    const result = copyFile(source, target);

    expect.assertions(1);
    return expect(result)
      .rejects
      .toThrow();
  });
});
