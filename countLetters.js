const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

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

const countLetters = function (str) {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (obj[str[i]]) {
      obj[str[i]].push(i);
    } else {
      obj[str[i]] = [];
      obj[str[i]].push(i);
    }
  }

  return obj;
}

// console.log(countLetters("hello"))

// assertArraysEqual(countLetters("hello").e, [1]);

module.exports = countLetters; 