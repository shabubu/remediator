import path from 'path';
import pathIsWritable from '../pathIsWritable';

const writablePath = path.resolve(__dirname, '..');
const absentPath = path.join(writablePath, 'foo');

describe('src/fsHelpers/pathIsWritable', () => {
  test('should resolve if path is writable', () => {
    expect.assertions(1);
    return expect(pathIsWritable(writablePath))
      .resolves
      .toEqual(true);
  });

  test('should reject if path is not writable', () => {
    expect.assertions(1);
    return expect(pathIsWritable(absentPath))
      .rejects
      .toThrowError();
  });
});
