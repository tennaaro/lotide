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

const findKeyByValue = function(object, value) {
  // create list of object keys
  let listObject = Object.keys(object);
  // loop through object keys to find value
  for (let i = 0; i < listObject.length; i++) {
    if (object[listObject[i]] === value) {
      return listObject[i];
    }
  }
  return undefined;
  // return object keys
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);