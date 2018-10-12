import path from 'path';
import { moveFile } from 'src/lib/fsHelpers';

jest.mock('fs');

describe('src/lib/fsHelpers/moveFile', () => {
  test('should resolve undefined when file is moved', () => {
    const source = path.resolve('./testAssets/1.jpg');
    const target = path.resolve('./newDirectory/newFile.jpg');
    const expected = undefined;
    const result = moveFile(source, target);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });

  test('should reject when mkdirp errors', () => {
    const source = path.resolve('./testAssets/1.jpg');
    const target = path.resolve('./testAssets/badMkdirp/1tornado.jpg');
    const result = moveFile(source, target);

    expect.assertions(1);
    return expect(result)
      .rejects
      .toThrow();
  });

  test('should reject on rename error', () => {
    const source = path.resolve('./testAssets/1.jpg');
    const target = path.resolve('./testAssets/badMoveDir/1.jpg');
    const result = moveFile(source, target);

    expect.assertions(1);
    return expect(result)
      .rejects
      .toThrow();
  });
});
