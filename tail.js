// FUNCTION IMPLEMENTATION

const tail = function(arr) {
  let t1 = arr;
  let t2 = t1.slice(1);
  return t2;
};

module.exports = tail;