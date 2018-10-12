import path from 'path';

const badDir = path.resolve('./testAssets/badMkdirp');

/**
 * Mocks out mkdirp to prevent fs writes during tests.
 * @param {string}   directory Directory to make.
 * @param {function} cb        Callback after executing.  If './testAssets/badMkdirp'
 *                             is provided directory then error will be set in callback.
 */
export default function mkdirpMock(directory, cb) {
  let error;

  if (path.resolve(directory) === badDir) {
    error = new Error();
  }

  cb(error);
}
