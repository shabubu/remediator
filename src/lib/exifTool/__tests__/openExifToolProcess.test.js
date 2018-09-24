import {
  closeExifToolProcess,
  openExifToolProcess,
} from 'src/lib/exifTool/index';

describe('src/lib/exifTool/openExifToolProcess', () => {
  afterEach(() => closeExifToolProcess());

  test('should resolve process id', () => {
    const pid = openExifToolProcess();

    expect.assertions(1);
    return expect(pid)
      .resolves
      .toEqual(expect.any(Number));
  });
});
