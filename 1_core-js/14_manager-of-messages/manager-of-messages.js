function defineType(properties, textOfMessage) {
  let resultType = 'information';
  Object.entries(properties.keywordOfType).forEach(([type, word]) => {
    if (textOfMessage.toLowerCase().includes(word)) {
      resultType = type;
    }
  });

  return resultType;
}

function selectColorByType(properties, type) {
  const entries = Object.entries(properties.color).filter(([key, value]) => key === type);
  const color = entries[0][1];

  return color;
}

function print(textOfMessage, type, color, isPrintDate) {
  const fullText = isPrintDate ? `${new Date().toLocaleTimeString()}: ${type}(${color}): ${textOfMessage}` : `${type}(${color}): ${textOfMessage}`;

  console.log(fullText);
}

function printWithDelay(properties, textOfMessage, type, color, isPrintDate) {
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
    color: {
      information: informationColor,
      warning: warningColor,
      error: errorColor,
    },
    keywordOfType: {
      information: informationKeyword,
      warning: warningKeyword,
      error: errorKeyword,
    },
    delay,
    isCoolDown: false,
  };

  this.setDelay = function setDelay(delay) {
    this.properties.delay = delay;
  };

  this.setShouldPrintDate = function setShouldPrintDate(booleanValue) {
    this.properties.shouldPrintDate = booleanValue;
  };

  this.printMessage = function printMessage(text) {
    const { properties } = this;
    const type = defineType(properties, text);
    const color = selectColorByType(properties, type);
    const { shouldPrintDate: isPrintDate } = properties;

    if (this.properties.delay > 0) {
      printWithDelay(properties, text, type, color, isPrintDate);
    } else {
      print(text, type, color, isPrintDate);
    }
  };
}
