const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 const n = 91;
 const sumDigit = (n, sum = 0) => {
    if(n){
       return sumDigit(Math.floor(n / 10), sum + (n % 10));
    }
    return sum;
 };
 const getSumOfDigits = n => {
    while(n > 9){
       n = sumDigit(n);
    };
    return n;
 };
 console.log(getSumOfDigits(n));

module.exports = {
  getSumOfDigits
};
