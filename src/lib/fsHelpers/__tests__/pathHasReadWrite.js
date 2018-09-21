import path from 'path';
import pathHasReadWrite from 'src/lib/fsHelpers/pathHasReadWrite';

const writablePath = path.resolve(__dirname, '..');
const absentPath = path.join(writablePath, 'foo');

describe('src/fsHelpers/pathHasReadWrite', () => {
  test('should resolve if path exists with read/write access', () => {
    expect.assertions(1);
    return expect(pathHasReadWrite(writablePath))
      .resolves
      .toEqual(true);
  });

  test('should reject if path does not exist', () => {
    expect.assertions(1);
    return expect(pathHasReadWrite(absentPath))
      .rejects
      .toThrowError();
  });
});
