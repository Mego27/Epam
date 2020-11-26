function combineData(type, ...data) {
  let result;
  const preparedData = convertToMap(data);

  switch (type) {
    case 'object': {
      result = {};
      preparedData.forEach((value, key) => {
        result[key] = value;
      });
      break;
    }

    case 'array': {
      result = [];
      preparedData.forEach((value) => {
        result.push(value);
      });
      break;
    }

    case 'number': {
      result = 0;
      preparedData.forEach((value) => result += Number(value));
      break;
    }

    case 'string': {
      result = '';
      preparedData.forEach((value) => result += value);
      break;
    }

    case 'boolean': {
      result = true;
      preparedData.forEach((value) => result = result && value);
      break;
    }

    default:
      break;
  }

  return result;
}

function convertToMap(...data) {
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
