function ManagerOfMessages() {
  this.properties = {
    shouldPrintDate: false,
    color: {
      information: 'white',
      warning: 'yellow',
      error: 'red',
    },
    keywordOfType: {
      information: 'информация',
      warning: 'предупреждение',
      error: 'ошибка',
    },
    delay: 1000,
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

    function defineType(textOfMessage) {
      let resultType = 'information';
      Object.entries(properties.keywordOfType).forEach(([type, word]) => {
        if (textOfMessage.toLowerCase().includes(word)) {
          resultType = type;
        }
      });

      return resultType;
    }

    function selectColorByType(type) {
      const entries = Object.entries(properties.color).filter(([key, value]) => key === type);
      const color = entries[0][1];

      return color;
    }

    function print(textOfMessage, type, color, isPrintDate) {
      const fullText = isPrintDate ? `${new Date().toLocaleTimeString()}: ${type}(${color}): ${textOfMessage}` : `${type}(${color}): ${textOfMessage}`;

      console.log(fullText);
    }

    function printWithDelay(textOfMessage, type, color, isPrintDate) {
      if (!properties.isCoolDown) {
        properties.isCoolDown = true;

        print(textOfMessage, type, color, isPrintDate);

        setTimeout(() => (properties.isCoolDown = false), properties.delay);
      }
    }

    const type = defineType(text);
    const color = selectColorByType(type);
    const { shouldPrintDate: isPrintDate } = this.properties;

    if (this.properties.delay > 0) {
      printWithDelay(text, type, color, isPrintDate);
    } else {
      print(text, type, color, isPrintDate);
    }
  };
}
