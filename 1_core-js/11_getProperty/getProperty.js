function getProperty(object, propertyPath) {
  const key = propertyPath.split('.')[0];
  if (object.hasOwnProperty(key)) {
    let remainingProperties = '';

    if (propertyPath.indexOf('.') > 0) {
      remainingProperties = propertyPath.slice(propertyPath.indexOf('.') + 1);
    }

    if (remainingProperties.length > 0) {
      if (typeof object[key] === 'object') {
        return getProperty(object[key], remainingProperties);
      }

      return undefined;
    }

    return object[key];
  }

  return undefined;
}
