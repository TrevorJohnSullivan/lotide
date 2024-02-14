const flatten = function(arr) {
  newArr = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let a of i) {
        newArr.push(a);
      }
    } else {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));