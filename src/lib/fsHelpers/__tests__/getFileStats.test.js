import path from 'path';
import getFileStats from 'src/lib/fsHelpers/getFileStats';

describe('src/lib/fsHelpers/getFileStats', () => {
  test('should resolve on success', () => {
    const filePath = path.resolve('./testAssets/1.jpg');
    const result = getFileStats(filePath);

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expect.any(Object));
  });

  test('should reject when there is an issue with the file', () => {
    const filePath = path.resolve('./testAssets/notARealFile.jpg');
    const result = getFileStats(filePath);

    expect.assertions(1);
    return expect(result)
      .rejects
      .toThrow();
  });
});
