function debounce(func, delay) {
  let isCoolDown = false;

  return function debouncedFunc(...args) {
    if (!isCoolDown) {
      isCoolDown = true;

      func(...args);

      setTimeout(() => (isCoolDown = false), delay);
    }
  };
}

function throttle(func, delay) {
  let isCoolDown = false;
  let lastArgs;

  return function throttledFunc(...args) {
    if (isCoolDown) {
      lastArgs = args;

      return;
    }

    isCoolDown = true;

    func.apply(this, lastArgs || args);

    setTimeout(() => {
      isCoolDown = false;

      if (lastArgs) {
        throttledFunc(...lastArgs);

        lastArgs = null;
      }
    }, delay);
  };
}
