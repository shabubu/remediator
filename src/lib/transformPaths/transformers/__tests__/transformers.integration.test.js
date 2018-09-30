import transformers from 'src/lib/transformPaths/transformers';
import { ALL_TRANSFORMERS } from 'src/constants/transformers';

describe('src/lib/transformPaths/transformers integration tests', () => {
  test('should have a function for every transformer', () => {
    const expected = 'function';

    // expect as many assertions as there are transformers
    expect.assertions(ALL_TRANSFORMERS.length);

    ALL_TRANSFORMERS.forEach(
      transformer => expect(typeof transformers[transformer]).toEqual(expected),
    );
  });
});
