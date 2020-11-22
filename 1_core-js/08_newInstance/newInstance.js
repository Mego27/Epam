function newInstance(constructor, ...args) {
  const result = {};
  const thisValue = Object.create(constructor.prototype);
  constructor.apply(result, ...args);
  Object.setPrototypeOf(result, thisValue);

  return result;
}
