import pathIsWritable from '../pathIsWritable';

const resolvePath = './resolve';
const rejectPath = './reject';

jest.mock('fs', () => ({
  access: jest.fn((path, option, cb) => {
    const error = path === './reject' ? 'error' : null;
    cb(error);
  }),
  constants: {
    W_OK: 'W_OK',
  },
}));

describe('src/fsHelpers/pathIsWritable', () => {
  test('should resolve if path is writable', () => {
    expect.assertions(1);
    return expect(pathIsWritable(resolvePath)).resolves.toEqual(true);
  });

  test('should reject if path is not writable', () => {
    expect.assertions(1);
    return expect(pathIsWritable(rejectPath)).rejects.toEqual('error');
  });
});
