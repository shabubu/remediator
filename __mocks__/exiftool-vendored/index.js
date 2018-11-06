/* eslint class-methods-use-this: 0 */
import path from 'path';
import image1Meta from './image1Meta';
import image2Meta from './image2Meta';
import image6Meta from './image6Meta';

const PID = 1234;

export default {
  ExiftoolProcess: class ExiftoolProcess {
    /**
     * Resolves mock metadata based on filePath.
     * @param    {string} filePath File path to retrieve mock data from.
     * @returns  {Promise}
     * @resolves {object}
     */
    readMetadata(filePath) {
      let returnObject;

      switch (filePath) {
        case path.resolve('./testAssets/1.jpg'):
        case path.resolve('./testAssets/subDir/3.jpg'):
          returnObject = image1Meta;
          break;
        case path.resolve('./testAssets/2.jpg'):
        case path.resolve('./testAssets/subDir2/4.jpg'):
          returnObject = image2Meta;
          break;
        case path.resolve('./testAssets/.hiddenDir/5.jpg'):
        case path.resolve('./testAssets/subDir/anotherSubDir/6.jpg'):
          returnObject = image6Meta;
          break;
        default:
          break;
      }

      return Promise.resolve({
        data: [returnObject],
      });
    }

    /**
     * Resolves mock PID.
     * @returns  {Promise}
     * @resolves {number}
     */
    open() {
      return Promise.resolve(PID);
    }

    /**
     * Resolves nothing.
     * @returns  {Promise}
     * @resolves {undefined}
     */
    close() {
      return Promise.resolve();
    }
  },
};
