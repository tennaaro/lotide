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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);