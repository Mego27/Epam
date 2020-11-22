function forEach(callback, thisArg = undefined) {
  const arr = this;
  for (let i = 0; i < arr.length; i += 1) {
    callback.call(thisArg, arr[i], i, arr);
  }

  return undefined;
}
