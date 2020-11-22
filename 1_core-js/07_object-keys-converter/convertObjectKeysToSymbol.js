function convertObjectKeysToSymbol(object) {
  const resultObject = {};
  Object.entries(object).forEach(([key, value]) => {
    const symbolKey = Symbol(key);
    resultObject[symbolKey] = value;
  });

  return resultObject;
}
