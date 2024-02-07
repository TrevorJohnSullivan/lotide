const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("this is false");
      }
    }
    console.log("this is true");
  } else {
    console.log("this is false");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

