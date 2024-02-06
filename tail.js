const tail = function (arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

assertEqual(tail([5,6,7]), [6,7]);