// FUNCTION IMPLEMENTATION


const eqArrays = function(arr1, arr2) {
  //case where array lengths don't match
  if (arr1.length !== arr2.length) {
    return "Input two arrays of same length."
  }
  let rval = true
  //loop through each respective value of arrays
  for (let i = 0; i < arr1.length; i++) {
    //compare using assert equal
    if (!(arr1[i] === arr2[i])) {
      rval = false;
    }
  }
  return rval;
}

module.exports = eqArrays;

//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));