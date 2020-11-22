function reduce(callback, initialValue = 0) {
  const arr = this;
  let result = initialValue;
  for (let i = 0; i < arr.length; i += 1) {
    result += callback(arr[i], i, arr);
  }

  return result;
}
