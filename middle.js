const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;