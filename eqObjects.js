const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };

// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

module.exports = eqObjects;