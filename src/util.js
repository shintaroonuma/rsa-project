/**
 * Returns true if the input string contains only ASCII characters.
 * @param {string} str input
 * @returns {boolean}
 */
export function isAscii(str) {
  return /^[\u0000-\u007f]*$/.test(str);
}
