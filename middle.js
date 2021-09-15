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

const middle = function(arr) {
  //initialize return array
  returnArray = [];
  //find length of array
  let lenArr = arr.length;
  //case where array length is 1 or 2
  if (lenArr === 1 || lenArr === 2) {
    return returnArray;
  }
  //even case
  if (lenArr % 2 === 0) {
    let idx1 = lenArr/2 - 1;
    let idx2 = lenArr/2;
    returnArray.push(arr[idx1]);
    returnArray.push(arr[idx2]);
  }
  //odd case
  else {
    let idx = Math.floor(lenArr/2);
    returnArray.push(arr[idx]);
  }
  return returnArray;
}

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]