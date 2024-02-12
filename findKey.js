const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};



const data = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const findKey = function (object, callback) {
  for (let i in object) {
    if (callback(object[i])) {
      return i;
    }
  }
};

// const result = findKey(data, (x) => x.stars === 3);
// const expected = "Akaleri";

// assertEqual(result, expected);

module.exports = findKey;