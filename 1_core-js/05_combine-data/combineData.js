import convertDataToArray from './convertDataToArray';
import convertDataToObject from './convertDataToObject';

function combineData(type, ...data) {
  let result;
  const dataObject = convertDataToObject(data);
  const dataArray = convertDataToArray(data);

  switch (type) {
    case 'object': {
      result = dataObject;
      break;
    }

    case 'array': {
      result = dataArray;
      break;
    }

    case 'number': {
      result = dataArray.reduce((result, value) => result + Number(value));
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

    default:
      break;
  }

  return result;
}
