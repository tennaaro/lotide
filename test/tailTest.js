const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs", "Dog"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 3 elements!