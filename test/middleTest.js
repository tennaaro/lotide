const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

console.log(eqArrays(middle([1, 2, 3]), [2])) // => [2]
console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3])) // => [3]
console.log(eqArrays(middle([1]), [])) // => []
// eqArrays(middle([1, 2]), []) // => []
// eqArrays(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]