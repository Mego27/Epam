function getProperty(object, propertyPath) {
  let result;
  const firstPointIndex = propertyPath.indexOf('.');
  let key = propertyPath.slice(0, firstPointIndex);
  let remainingProperties = propertyPath.slice(firstPointIndex + 1);

  if (firstPointIndex === -1) {
    key = propertyPath;
    remainingProperties = '';
  }

  if (object.hasOwnProperty(key)) {
    result = object[key];

    if (remainingProperties.length > 0) {
      result = getProperty(result, remainingProperties);
    }
  }

  return result;
}
