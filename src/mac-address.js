const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 let inputString = "00-1B-63-84-45-E6";
 function isMAC48Address(inputString) {
  let string = inputString.replace(/[-, G-Z]/gi, '');
   if (string.length === 12) {
  let a = parseInt(string.substr(1, 2), 16);
  let b = parseInt(string.substr(3, 2), 16);
  let c = parseInt(string.substr(5, 2), 16);
  let d = parseInt(string.substr(7, 2), 16);
  let e = parseInt(string.substr(9, 2), 16);
  let f = parseInt(string.substr(11, 2), 16);
if (a <= 255 && b <= 255 && c <= 255 && d <= 255 && e <= 255 && f <= 255) { return true; };
   } else {return false;}
}
isMAC48Address(inputString);

module.exports = {
  isMAC48Address
};
