function prepareHtmlString(string) {
  const regDeleteSpacesBeforeTag = /<\s+/g;
  const regDeleteSpacesAfterTag = /\s+>/g;
  const regDeleteSpacesInTag = /\s+/g;
  const regDeleteSpacesBeforeAttribute = /\s*=\s*"/g;
  const preparedString = string.replace(regDeleteSpacesInTag, ' ')
    .replace(regDeleteSpacesBeforeAttribute, '="')
    .replace(regDeleteSpacesBeforeTag, '<')
    .replace(regDeleteSpacesAfterTag, '>');

  return preparedString;
}

function getArrayOfTagsAndAttributes(htmlString) {
  const arrayOfTagsMatches = [...htmlString.matchAll(/<(\w+)\s*([\w\s"=:;]+)*>/g)];
  const arrayOfTagsAndAttributes = arrayOfTagsMatches
    .map(([fullMatch, nameTag, attributesString]) => [nameTag, attributesString || '']);

  return arrayOfTagsAndAttributes;
}

function getArrayOfAttributes(attributesString) {
  const attributes = [...attributesString.matchAll(/(\w*)=?"\s*([\w\s:;]*)"/g)];
  const arrayOfAttributes = attributes
    .map(([fullMatch, nameAttribute, value]) => [nameAttribute, value.trim()]);

  return arrayOfAttributes;
}

function getObjectHtmlString(string) {
  const objectHtml = {};
  const preparedString = prepareHtmlString(string);
  const arrayOfTagsAndAttributes = getArrayOfTagsAndAttributes(preparedString);

  arrayOfTagsAndAttributes.forEach(([tag, attributesString]) => {
    const attributes = getArrayOfAttributes(attributesString);

    objectHtml[tag] = {};

    if (attributes.length !== 0) {
      attributes.forEach(([nameAttribute, value]) => {
        objectHtml[tag][nameAttribute] = value;
      });
    }
  });

  return objectHtml;
}