const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
let str = "aabbbc";
function encodeLine(str) {
  let res = str.replace(/((.)\2*)/g, function(value) {
    let [l] = value;
    if (value.length > 1) { return `${value.length}${l}`; }
    if (value.length = 1) { return `${l}`; }
  });
  return(res);
}
encodeLine(str);

module.exports = {
  encodeLine
};
