// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
  //console.assert(actual === expected, "😢😢😢" + actual + " !== " + expected);
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

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log("✅✅✅ Arrays are equal.");
  }
  else {
    console.log("❌❌❌ Arrays not equal.");
  }
}

let returnList = [];
const flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      returnList = flatten(arr[i]);
    }
    else {
      returnList.push(arr[i]);
    }
  }
  return returnList;
}


console.log(flatten([1, 2, [3, 4], 5, [6], [7, 8], [9, [10, 11]]]));
//console.log(Array.isArray([1,2,3,4]));