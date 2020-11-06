function combineData(type, ...args) {
    let result;
    let data = {};
    let dataArray = [];
    let counterDefaultKeys = 1;
    for(let item of args) {
      if (item instanceof Array) {
        item.forEach((value, index) => {
          data[index] = value;
          dataArray.push(value);
        });
        continue;
      };
  
      if (item instanceof Object) {
        for(let key in item) {
          data[key] = item[key];
          dataArray.push(item[key]);
        };
        continue;
      };
      data[`key${counterDefaultKeys++}`] = item;
      dataArray.push(item);
    };
  
    switch (type) {
      case 'object': {
        result = data;
        break;
      }
  
      case 'array': {
        return dataArray;
      }
  
      case 'number': {
        for(let value of dataArray) {
          result += +value;
        }
        break;
      }
  
      case 'string': {
        result = '';
        for(let value of dataArray) {
          result += String(value);
        }
        break;
      }
  
      case 'boolean': {
        result = true;
        for(let value of dataArray) {
          result = result && value;
        }
        break;
      }
    }
  
    return result;
  }
