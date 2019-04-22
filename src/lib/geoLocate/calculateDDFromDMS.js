/**
 * Calculates decimal degree from decimal minute second direction object.
 * @param (Object)        DMSObject           Object containing DMS data.
 * @param (Number|String) DMSObject.degrees
 * @param (String)        DMSObject.direction
 * @param (Number|String) DMSObject.minutes
 * @param (Number|String) DMSObject.seconds
 * @returns {number}
 */
export default function calculateDDFromDMS(DMSObject) {
  const {
    degrees,
    direction,
    minutes,
    seconds,
  } = DMSObject;

  let dd = Number(degrees) + (Number(minutes) / 60) + (Number(seconds) / (3600));

  if (
    direction === 'S'
    || direction === 'W'
  ) {
    dd *= -1;
  }

  return dd;
}
