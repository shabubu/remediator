import { DMSToDDConversionFailure } from 'src/errors';
import calculateDDFromDMS from 'src/lib/geoLocate/latLongDMSToDD';

describe('src/lib/geoLocate/latLongDMSToDD', () => {
  test('should properly convert DMS to DD', () => {
    const dms = '47 deg 42\' 22.35" N, 122 deg 14\' 37.79" W';
    const expected = '47.706208333333336,-122.24383055555556';
    const result = calculateDDFromDMS(dms);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw error when problem converting dms to dd', () => {
    const invalidDms = 118;

    expect.assertions(1);
    expect(() => {
      calculateDDFromDMS(invalidDms);
    }).toThrow(new DMSToDDConversionFailure(invalidDms));
  });
});
