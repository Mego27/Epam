function getProperty(object, propertyPath) {
  const [key, ...remainingProperties] = propertyPath.split('.');

  let result;

  if (object.hasOwnProperty(key)) {
    result = remainingProperties.length > 0 ? getProperty(object[key], remainingProperties.join('.')) : object[key];
  }

  return result;
}
