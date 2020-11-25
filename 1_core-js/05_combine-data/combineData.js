function combineData(type, ...data) {
  let result;
  let counterDefaultKeys = 0;
  const preparedData = new Map();

  data.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((value, index) => {
        preparedData.set(index, value);
      });

      return;
    }

    if (item instanceof Object) {
      Object.entries(item).forEach(([key, value]) => {
        preparedData.set(key, value);
      });

      return;
    }

    preparedData.set(`key${counterDefaultKeys += 1}`, item);
  });

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
