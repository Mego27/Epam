function debounce(func, delay) {
  let timeout;

  return function debouncedFunc(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, delay) {
  let isCoolDown = false;

  return function throttledFunc(...args) {
    if (!isCoolDown) {
      isCoolDown = true;

      func.apply(this, args);

      setTimeout(() => (isCoolDown = false), delay);
    }
  };
}
