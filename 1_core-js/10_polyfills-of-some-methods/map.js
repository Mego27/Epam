function map(callback, thisArg = undefined) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(callback.call(thisArg, arr[i], i, arr));
  }

  return result;
}
