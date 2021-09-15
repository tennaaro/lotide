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

const removeSpace = function(str) {
  while (str.includes(" ")) {
    str = str.replace(" ", "");
  }
  return str;
}

const removeDuplicates = function(str) {
  let set = new Set(str.split(""))
  return [...set].join("");
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // remove spaces
  let removedSpaces = removeSpace(sentence);
  // remove duplicates
  let removedDup = removeDuplicates(removedSpaces);
  // create key values with letters and empty list as values
  for (let i = 0; i < removedDup.length; i++) {
    results[removedDup[i]] = [];
  }
  // loop through and count
  for (let j = 0; j < removedDup.length; j++) {
    for (let k = 0; k < sentence.length; k++) {
      if (removedDup[j] === sentence[k]){
        results[removedDup[j]].push(k);
      }
    }
  }
  return results;
};

//assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));