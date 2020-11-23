function newInstance(constructor, ...args) {
  let result = {};

  result = constructor.apply(result, ...args);
  result.__proto__ = constructor.prototype;

  return result;
}
