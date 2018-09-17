import removeArrayDuplicates from '../removeArrayDuplicates';

describe('src/lib/util/removeArrayDuplicates', () => {
  test('should return array without duplicates', () => {
    const arrayWithDuplicates = [
      'one',
      'two',
      'two',
      'three',
    ];
    const expected = [
      'one',
      'two',
      'three',
    ];
    const result = removeArrayDuplicates(arrayWithDuplicates);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
