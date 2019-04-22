import calculateDDFromDMS from 'src/lib/geoLocate/calculateDDFromDMS';

describe('src/lib/geoLocate/calculateDDFromDMS', () => {
  test('should return value when direction is not south or west', () => {
    const dms = {
      degrees: '1',
      direction: 'N',
      minutes: '60',
      seconds: '7200',
    };
    const expected = 4;
    const result = calculateDDFromDMS(dms);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return opposite value when direction is south', () => {
    const dms = {
      degrees: '1',
      direction: 'S',
      minutes: '60',
      seconds: '7200',
    };
    const expected = -4;
    const result = calculateDDFromDMS(dms);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should return opposite value when direction is west', () => {
    const dms = {
      degrees: '1',
      direction: 'W',
      minutes: '60',
      seconds: '7200',
    };
    const expected = -4;
    const result = calculateDDFromDMS(dms);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });
});
