// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
  //console.assert(actual === expected, "😢😢😢" + actual + " !== " + expected);
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const tail = function(arr) {
  let t1 = arr;
  let t2 = t1.slice(1);
  return t2;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs", "Dog"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 3 elements!