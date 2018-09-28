import prependZero from 'src/lib/util/prependZero';

describe('src/lib/util/prependZero', () => {
  test('should prepend 0 if value is less than 10', () => {
    const value = 1;
    const expected = '01';
    const result = prependZero(value);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should not prepend if value is 10 or more', () => {
    const value = 10;
    const expected = '10';
    const result = prependZero(value);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
