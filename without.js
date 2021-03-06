// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`๐๐๐Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  else {
    console.log(`๐ข๐ข๐ขAssertion Failed: ${actual} !== ${expected}`);
    return false;
  }
  //console.assert(actual === expected, "๐ข๐ข๐ข" + actual + " !== " + expected);
};

const eqArrays = function(arr1, arr2) {
  //case where array lengths don't match
  if (arr1.length !== arr2.length) {
    return "Input two arrays of same length."
  }
  let rval = true
  //loop through each respective value of arrays
  for (let i = 0; i < arr1.length; i++) {
    //compare using assert equal
    if (!assertEqual(arr1[i], arr2[i])) {
      rval = false;
    }
  }
  return rval;
}

//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log("โโโ Arrays are equal.");
  }
  else {
    console.log("โโโ Arrays not equal.");
  }
}

//console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false
//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true


const without = function(source, toRemove) {
  //create copy of source array
  let newArray = source;
  //loop through values to remove
  for (let i = 0; i < toRemove.length; i++) {
    //check if values are in source array
    while (newArray.includes(toRemove[i]) === true) {
      //remove values from source array
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] ===  toRemove[i]) {
          newArray.splice(j, 1);
        }
      }
    }
  }
  //return new array
  return newArray;
}

//console.log(without([1, 2, 3], [1]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));

/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

//console.log(without([1, 2, 3, 4, 5, 2, 7], [2, 4]));