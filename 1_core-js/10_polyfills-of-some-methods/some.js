function some(callback, thisArg) {
  const arr = this;
  for (let i = 0; i < arr.length; i += 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }

  return false;
}
