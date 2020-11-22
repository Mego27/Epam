function deepCloneObject(object) {
  let result = {};

  if (Array.isArray(object)) {
    result = object.map(deepCloneObject);
  }

  if (typeof object === 'object') {
    Object.entries(object).forEach(([key, value]) => {
      if (Array.isArray(value) || typeof value === 'object') {
        result[key] = deepCloneObject(value);
      } else {
        result[key] = value;
      }
    });
  }

  return result;
}
