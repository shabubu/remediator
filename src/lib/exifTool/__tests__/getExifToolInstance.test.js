import getExifToolInstance from 'src/lib/exifTool/getExifToolInstance';

describe('src/lib/exifTool/getExifToolInstance', () => {
  test('should return identical object instances on multiple calls', () => {
    const exifTool1 = getExifToolInstance();
    const exifTool2 = getExifToolInstance();

    expect.assertions(1);
    expect(exifTool1).toBe(exifTool2);
  });
});
