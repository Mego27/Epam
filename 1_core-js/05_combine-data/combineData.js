function combineData(type, ...args) {
  let result;
  let data = {};
  let dataArray = [];
  let counterDefaultKeys = 1;
  args.forEach((item) => {
    if (item instanceof Array) {
      item.forEach((value, index) => {
        data[index] = value;
        dataArray.push(value);
      })

      return;
    }

    if (item instanceof Object) {
      Object.entries(item).forEach(([key, value]) => {
        data[key] = value;
        dataArray.push(value);
      })

      return;
    }
    
    data[`key${counterDefaultKeys++}`] = item;
    dataArray.push(item);
  })

  switch (type) {
    case 'object': {
      result = data;
      break;
    }

    case 'array': {
      return dataArray;
    }

    case 'number': {
      result = dataArray.reduce((result, value) => result + +value, 0);
      break;
    }

    case 'string': {
      result = dataArray.reduce((result, value) => result + value, '');
      break;
    }

    case 'boolean': {
      result = dataArray.reduce((result, value) => result && value, true);
      break;
    }
  }

  return result;
}
