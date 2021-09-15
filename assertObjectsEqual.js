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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let listObject1 = Object.keys(object1);
  let listObject2 = Object.keys(object2);
  if (listObject1.length !== listObject2.length) {
    return false;
  }
  rval = true;
  for (let i = 0; i < listObject1.length; i++) {
    let checkVal = false;
    for (let j = 0; j < listObject2.length; j++) {
      if (object1[listObject1[i]] === object2[listObject2[j]]) {
        checkVal = true;
      }
    }
    rval *= checkVal
  }
  return Boolean(rval);
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

let ab = { a: "1", b: "2" };
let ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));

const cd = { c: "1", d: "2", e: "3" };
const dc = { d: "2", e: "1", c: "3" };
console.log(assertObjectsEqual(cd, dc));

let abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(abc, ab));