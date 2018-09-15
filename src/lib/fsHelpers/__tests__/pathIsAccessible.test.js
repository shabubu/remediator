import pathIsAccessible from '../pathIsAccessible';

const resolvePath = './resolve';
const rejectPath = './reject';

jest.mock('fs', () => ({
  access: jest.fn((path, cb) => {
    const error = path === './reject' ? 'error' : null;
    cb(error);
  }),
}));

describe('src/fsHelpers/pathIsAccessible', () => {
  test('should resolve if path is accessible', () => {
    expect.assertions(1);
    return expect(pathIsAccessible(resolvePath)).resolves.toEqual(true);
  });

  test('should reject if path is inaccessible', () => {
    expect.assertions(1);
    return expect(pathIsAccessible(rejectPath)).rejects.toEqual('error');
  });
});
