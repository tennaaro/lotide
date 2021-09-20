// FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log("✅✅✅ Arrays are equal.");
  }
  else {
    console.log("❌❌❌ Arrays not equal.");
  }
}


//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
//console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false
//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true

module.exports = assertArraysEqual;