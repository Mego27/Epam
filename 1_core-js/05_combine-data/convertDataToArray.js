function convertDataToArray(...data) {
  const arrayOfData = [];

  data.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((value) => arrayOfData.push(value));

      return;
    }

    if (item instanceof Object) {
      Object.values(item).forEach((value) => arrayOfData.push(value));

      return;
    }

    arrayOfData.push(item);
  });

  return arrayOfData;
}
