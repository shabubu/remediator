const path = require('path');

const index = jest.genMockFromModule('fs');
const badCopyPath = path.resolve('./testAssets/badCopyDir/1.jpg');

/**
 * Mock implementation for fs.copyFile
 * @param {string}   source Source file to copy.
 * @param {string}   target Target file destination.
 * @param {function} cb     Callback with error if target is './testAssets/badCopyDir/1.jpg'.
 */
function copyFile(source, target, cb) {
  let error;

  if (target === badCopyPath) {
    error = new Error();
  }

  cb(error);
}

index.copyFile = copyFile;

module.exports = index;
