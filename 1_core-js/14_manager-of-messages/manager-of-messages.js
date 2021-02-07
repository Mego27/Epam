function defineType(properties, textOfMessage) {
  let resultType = 'information';
  Object.entries(properties.types).forEach(([type, { color, keyword }]) => {
    if (textOfMessage.toLowerCase().includes(keyword)) {
      resultType = type;
    }
  });

  return resultType;
}

function print(textOfMessage, type, color, shouldPrintDate) {
  const generalText = `${type}: ${textOfMessage}`;
  const colorOfText = `color: ${color}`;
  const fullText = shouldPrintDate ? `(${new Date().toLocaleTimeString()})${generalText}` : generalText;
  const coloredfullText = `%c${fullText}`;

  console.log(coloredfullText, colorOfText);
}

function timeLimitedPrint(properties, textOfMessage, type, color, isPrintDate) {
  if (!properties.isCoolDown) {
    properties.isCoolDown = true;

    print(textOfMessage, type, color, isPrintDate);

    setTimeout(() => (properties.isCoolDown = false), properties.delay);
  }
}

function ManagerOfMessages(
  { informationColor, warningColor, errorColor },
  { informationKeyword, warningKeyword, errorKeyword },
  shouldPrintDate,
  delay,
) {
  this.properties = {
    shouldPrintDate,
    delay,
    isCoolDown: false,
    types: {
      information: { color: informationColor, keyword: informationKeyword },
      warning: { color: warningColor, keyword: warningKeyword },
      error: { color: errorColor, keyword: errorKeyword },
    },
  };

  this.setDelay = function setDelay(delay) {
    this.properties.delay = delay;
  };

  this.setShouldPrintDate = function setShouldPrintDate(shouldPrintDate) {
    this.properties.shouldPrintDate = shouldPrintDate;
  };

  this.printMessage = function printMessage(text) {
    const { properties } = this;
    const type = defineType(properties, text);
    const { color } = properties.types[type];
    const { shouldPrintDate } = properties;

    if (this.properties.delay > 0) {
      timeLimitedPrint(properties, text, type, color, shouldPrintDate);
    } else {
      print(text, type, color, shouldPrintDate);
    }
  };
}
