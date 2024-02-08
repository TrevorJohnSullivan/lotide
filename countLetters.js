const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const countLetters = function (sent) {
  let finObj = {};
  for (let i of sent) {
    if (i === " ") {
      continue;
    } if (finObj[i]) {
      finObj[i]++;
    } else {
      finObj[i] = 1;
    }
  }
  return finObj;
};

console.log(countLetters("LHL is Life"));