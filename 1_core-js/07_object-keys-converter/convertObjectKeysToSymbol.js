function convertObjectKeysToSymbol(object) {
  const resultObject = Object.entries(object).reduce((result, [key, value]) => {
    const symbolKey = Symbol(key);
    result[symbolKey] = value;

    return result;
  }, {});

  return resultObject;
}
