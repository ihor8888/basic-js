const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 let backyard = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];
 function countCats(backyard) {
  let ears = '^^';
  let cats = 0;
   backyard.forEach(function(arr, i, backyard) {
    for(let i=0, count=0; i<arr.length; i++) {
      if (arr[i] === ears) {
        cats += count+1;
      }
    }
   });
  return cats;
}
countCats(backyard);



module.exports = {
  countCats
};
