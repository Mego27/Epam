function debounce(func, delay) {
  let isCoolDown = false;

  return function debouncedFunc(...args) {
    if (!isCoolDown) {
      isCoolDown = true;

      setTimeout(() => {
        isCoolDown = false;
        func.apply(this, args);
      }, delay);
    }
  };
}

function throttle(func, delay) {
  let isCoolDown = false;
  let lastArgs;
  let savedThis;

  return function throttledFunc(...args) {
    if (isCoolDown) {
      lastArgs = args;
      savedThis = this;

      return;
    }

    isCoolDown = true;

    func.apply(this, lastArgs || args);

    setTimeout(() => {
      isCoolDown = false;

      if (lastArgs) {
        throttledFunc.apply(savedThis, lastArgs);

        lastArgs = null;
        savedThis = null;
      }
    }, delay);
  };
}
