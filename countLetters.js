const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const removeSpace = function(str) {
  while (str.includes(" ")) {
    str = str.replace(" ", "");
  }
  return str;
}

const countLetters = function(sentence) {
  let rObject = {};
  let removedSpaces = removeSpace(sentence);
  for (let i = 0; i < removedSpaces.length; i++) {
    let counter = 0;
    for (let j = 0; j < removedSpaces.length; j++) {
      if (removedSpaces[i] === removedSpaces[j]) {
        counter += 1;
      }
    }
    rObject[removedSpaces[i]] = counter;
  }
  return rObject;
}


console.log(countLetters("lighthouse in the house"));