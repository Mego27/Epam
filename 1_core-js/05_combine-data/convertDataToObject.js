function convertDataToObject(...data) {
  const objectOfData = {};
  let counterDefaultKeys = 1;

  data.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((value, index) => {
        objectOfData[index] = value;
      });

      return;
    }

    if (item instanceof Object) {
      Object.entries(item).forEach(([key, value]) => {
        objectOfData[key] = value;
      });

      return;
    }

    objectOfData[`key${counterDefaultKeys++}`] = item;
  });

  return objectOfData;
}
