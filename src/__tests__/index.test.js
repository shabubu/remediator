import remediator from '../index';

describe('src/index.js', () => {
  test('remediator', () => {
    const result = remediator();

    expect(result).toEqual(true);
  });
});
