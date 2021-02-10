function defineType(properties, textOfMessage) {
  let resultType = 'information';
  Object.entries(properties.types).forEach(([type, { keyword }]) => {
    if (textOfMessage.toLowerCase().includes(keyword.toLowerCase())) {
      resultType = type;
    }
  });

  return resultType;
}

function print(properties, text) {
  const type = defineType(properties, text);
  const { color } = properties.types[type];
  const { shouldPrintDate } = properties;
  const generalText = `${type}: ${text}`;
  const colorOfText = `color: ${color}`;
  const fullText = shouldPrintDate ? `(${new Date().toLocaleTimeString()})${generalText}` : generalText;
  const coloredfullText = `%c${fullText}`;

  console.log(coloredfullText, colorOfText);
}

function timeLimitedPrint(properties, text) {
  if (properties.delay > 0) {
    if (!properties.isCoolDown) {
      properties.isCoolDown = true;

      print(properties, text);

      setTimeout(() => (properties.isCoolDown = false), properties.delay);
    }
  } else {
    print(properties, text);
  }
}

function createManagerOfMessages(
  { informationColor, warningColor, errorColor },
  { informationKeyword, warningKeyword, errorKeyword },
  shouldPrintDate,
  delay,
) {
  const properties = {
    shouldPrintDate,
    delay,
    isCoolDown: false,
    types: {
      information: { color: informationColor, keyword: informationKeyword },
      warning: { color: warningColor, keyword: warningKeyword },
      error: { color: errorColor, keyword: errorKeyword },
    },
  };

  const setDelay = function setDelay(delay) {
    properties.delay = delay;
  };

  const setShouldPrintDate = function setShouldPrintDate(shouldPrintDate) {
    properties.shouldPrintDate = shouldPrintDate;
  };

  const printMessage = function printMessage(text) {
    timeLimitedPrint(properties, text);
  };

  return {
    setDelay,
    setShouldPrintDate,
    printMessage,
  };
}
