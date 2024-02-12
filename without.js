const without = function (sArr, rArr) {
  let newArr = [];
  for (let i of sArr) {
    let found = false;
    for (let a of rArr) {
      if (i === a) {
       found = true; 
      }
    }
    if (found === false) {
      newArr.push(i);
  }
  }
  return newArr;
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};




// const words = ["hello", "world", "lighthouse"];

// let result = without(words, ["lighthouse"]);

// assertArraysEqual(result, ["hello", "world"]);

module.exports = without;