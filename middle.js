const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};


function middle(array) {
  if (array.length < 3) {
    return [];
  }
  const i = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[i - 1], array[i]];
  } else {
    return [array[i]];
  }
}

console.log(middle([1, 2]));