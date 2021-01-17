function newInstance(constructor, args) {
  let result = {};

  if (typeof (constructor.apply(result, args)) === 'object') {
    result = constructor.apply(result, args);
  } else if (typeof (constructor.prototype) === 'object') {
    Object.setPrototypeOf(result, constructor.prototype);
  }

  return result;
}

module.exports = newInstance;
