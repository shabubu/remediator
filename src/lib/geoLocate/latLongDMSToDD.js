import DMSToDDConversionFailure from 'src/errors/DMSToDDConversionFailure';
import calculateDDFromDMS from 'src/lib/geoLocate/calculateDDFromDMS';

/**
 * Converts DMS formatted latitutde and longitude gps string into DD gps string.
 * @param   {String} dms Source DMS string.
 * @returns {string}     Output DD string.
 */
export default function latLongDMSToDD(dms) {
  try {
    const cleanedDMS = dms
      .replace(/deg /g, '')
      .replace(/'/g, '')
      .replace(/"/g, '');
    const [
      dmsLat,
      dmsLng,
    ] = cleanedDMS.split(', ');
    const [
      latDegrees,
      latMinutes,
      latSeconds,
      latDirection,
    ] = dmsLat.split(' ');
    const [
      lngDegrees,
      lngMinutes,
      lngSeconds,
      lngDirection,
    ] = dmsLng.split(' ');

    const ddLat = calculateDDFromDMS({
      degrees: latDegrees,
      direction: latDirection,
      minutes: latMinutes,
      seconds: latSeconds,
    });
    const ddLng = calculateDDFromDMS({
      degrees: lngDegrees,
      direction: lngDirection,
      minutes: lngMinutes,
      seconds: lngSeconds,
    });

    return `${ddLat},${ddLng}`;
  } catch (e) {
    throw new DMSToDDConversionFailure(dms);
  }
}
