function combineData(type, ...data) {
  let result;
  const preparedData = convertToMap(data);

  switch (type) {
    case 'object': {
      const arrayOfEntries = [...preparedData.entries()];

      result = arrayOfEntries.reduce((resultObject, [key, value]) => {
        resultObject[key] = value;

        return resultObject;
      }, {});
      break;
    }

    case 'array': {
      const arrayOfValues = [...preparedData.values()];

      result = arrayOfValues.reduce((resultArray, value) => {
        resultArray.push(value);

        return resultArray;
      }, []);
      break;
    }

    case 'number': {
      const arrayOfValues = [...preparedData.values()];
      result = arrayOfValues.reduce((sum, value) => sum += Number(value), 0);
      break;
    }

    case 'string': {
      const arrayOfValues = [...preparedData.values()];
      result = arrayOfValues.reduce((sumString, value) => sumString += value, '');
      break;
    }

    case 'boolean': {
      const arrayOfValues = [...preparedData.values()];

      result = arrayOfValues.reduce((sumConjunction, value) => {
        sumConjunction = sumConjunction && value;

        return sumConjunction;
      }, true);
      break;
    }

    default:
      break;
  }

  return result;
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
