import { openExifToolProcess } from 'src/lib/exifTool/index';

describe('src/lib/exifTool/openExifToolProcess', () => {
  test('should resolve process id', () => {
    const result = openExifToolProcess();
    const expected = 1234;

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });
});
