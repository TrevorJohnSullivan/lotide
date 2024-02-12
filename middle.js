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

module.exports = middle;

