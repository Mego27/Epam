function deepCloneObject(object) {
  let result = {};

  if (Array.isArray(object)) {
    result = [];
  }

  if (typeof object === 'object') {
    Object.entries(object).forEach(([key, value]) => {
      result[key] = deepCloneObject(value);
    });
  } else {
    result = object;
  }

  return result;
}
