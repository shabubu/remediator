/**
 * Prepends "0" to values that are less than 10.
 * @param   {Number} value Value to prepend to.
 * @returns {string}       Final value with or without 0.
 */
export default function prependZero(value) {
  const prepend = value < 10 ? '0' : '';

  return `${prepend}${value}`;
}
