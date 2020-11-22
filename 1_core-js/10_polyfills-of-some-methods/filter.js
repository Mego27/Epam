function filter(callback, thisArg) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}