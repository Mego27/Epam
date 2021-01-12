function combineData(type, ...data) {
  const preparedData = prepareData(type, data);
  const result = {
    object: getCombinedDataToObject,
    array: getCombinedDataToArray,
    string: getCombinedDataToString,
    number: getCombinedDataToNumber,
    boolean: getCombinedDataToBoolean,
  }[type](preparedData);

  return result;
}

function prepareData(type, data) {
  if (type === 'object' && type !== 'array') {
    return [...convertToMap(data).entries()];
  }

  return [...convertToMap(data).values()];
}

function convertToMap(data) {
  const result = new Map();
  let counterDefaultKeys = 0;

  data.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((value, index) => {
        result.set(index, value);
      });

      return;
    }

    if (item instanceof Object) {
      Object.entries(item).forEach(([key, value]) => {
        result.set(key, value);
      });

      return;
    }

    counterDefaultKeys += 1;
    result.set(`key${counterDefaultKeys}`, item);
  });

  return result;
}

function getCombinedDataToObject(data) {
  return data.reduce((resultObject, [key, value]) => {
    resultObject[key] = value;

    return resultObject;
  }, {});
}

function getCombinedDataToArray(data) {
  return data.reduce((resultArray, value) => {
    resultArray.push(value);

    return resultArray;
  }, []);
}

function getCombinedDataToNumber(data) {
  return data.reduce((sum, value) => sum + Number(value));
}

function getCombinedDataToString(data) {
  return data.reduce((sumString, value) => sumString + value);
}

function getCombinedDataToBoolean(data) {
  return data.reduce((sumConjunction, value) => sumConjunction && value);
}
