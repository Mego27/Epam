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

    // const type = userType || this._defineType(text);
    const type = defineType(text);
    // const color = this._selectColorByType(type);
    const color = selectColorByType(type);
    const { shouldPrintDate: isPrintDate } = this.properties;

    if (this.properties.delay > 0) {
      // this._printWithDelay(text, type, color, isPrintDate);
      printWithDelay(text, type, color, isPrintDate);
    } else {
      // this._print(text, type, color, isPrintDate);
      print(text, type, color, isPrintDate);
    }
  };

  // this._printWithDelay = function debounce(text, type, color, isPrintDate) {
  //   if (!this.properties.isCoolDown) {
  //     this.properties.isCoolDown = true;

  //     this._print(text, type, color, isPrintDate);

  //     setTimeout(() => (this.properties.isCoolDown = false), this.properties.delay);
  //   }
  // };

  // this._print = function printFunc(text, type, color, isPrintDate) {
  //   const fullText = isPrintDate ? `${new Date().toLocaleTimeString()}: ${type}(${color}): ${text}` : `${type}(${color}): ${text}`;
  //   console.log(fullText);
  // };

  // this._defineType = (text) => {
  //   let resultType = 'information';
  //   Object.entries(this.properties.keywordOfType).forEach(([type, word]) => {
  //     if (text.toLowerCase().includes(word)) {
  //       resultType = type;
  //     }
  //   });

  //   return resultType;
  // };

  // this._selectColorByType = (type) => {
  //   const entries = Object.entries(this.properties.color).filter(([key, value]) => key === type);
  //   const color = entries[0][1];

  //   return color;
  // };
}

const managerOfMessages = new ManagerOfMessages();
managerOfMessages.properties.shouldPrintDate = true;
// managerOfMessages.properties.delay = 5000;
managerOfMessages.printMessage('printing sad', 'error');
managerOfMessages.printMessage('printing wwevecrwc предупреждение');
// console.log(managerOfMessages._selectColorByType('information'));
setTimeout(() => managerOfMessages.printMessage('printing 12413255 ошибка', ''), 2500);