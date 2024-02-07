const assertArraysEqual = function (retVal) {
  if (retVal === true) {
    console.log("The arrays are equal");
  }
  if (retVal === false) {
    console.log("The arrays are not equal");
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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));