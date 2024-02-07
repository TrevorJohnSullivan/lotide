const without = function (sArr, rArr) {
  let newArr = [];
  for (let i of sArr) {
    for (let a of rArr) {
      if (i !== a) {
        newArr.push(i);
      }
    }
  }
  console.log(newArr);
};

without([1, 2, 3], [1]);