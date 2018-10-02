import { closeExifToolProcess } from 'src/lib/exifTool/index';

describe('src/lib/exifTool/closeExifToolProcess', () => {
  test('should resolve when closed', () => {
    const result = closeExifToolProcess();
    const expected = undefined;

    expect.assertions(1);
    return expect(result)
      .resolves
      .toEqual(expected);
  });
});
