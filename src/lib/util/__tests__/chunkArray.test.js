import chunkArray from 'src/lib/util/chunkArray';

describe('src/lib/util/chunkArray', () => {
  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const toChunk = [
    value1,
    value2,
    value3,
  ];

  test('should return 1 chunk when size is equal or less than chunk size', () => {
    const chunkSize = 3;
    const expected = [
      [
        ...toChunk,
      ],
    ];
    const result = chunkArray(toChunk, chunkSize);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return 2 chunks when size is greater thank chunk size', () => {
    const chunkSize = 2;
    const expected = [
      [
        value1,
        value2,
      ],
      [
        value3,
      ],
    ];
    const result = chunkArray(toChunk, chunkSize);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
