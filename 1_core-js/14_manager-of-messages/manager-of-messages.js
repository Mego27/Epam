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
    isEnabledDelay: true,
    delay: 1000,
    _isCoolDown: false,
  };

  this.printMessage = (text, userType) => {
    const type = userType || this._defineType(text);
    const color = this._selectColorByType(type);
    const { shouldPrintDate: isPrintDate } = this.properties;

    if (this.properties.isEnabledDelay) {
      this._printWithDelay(text, type, color, isPrintDate);
    } else {
      this._print(text, type, color, isPrintDate);
    }
  };

  this._printWithDelay = function debounce(text, type, color, isPrintDate) {
    if (!this.properties.isCoolDown) {
      this.properties.isCoolDown = true;

      this._print(text, type, color, isPrintDate);

      setTimeout(() => (this.properties.isCoolDown = false), this.properties.delay);
    }
  };

  this._print = function printFunc(text, type, color, isPrintDate) {
    const fullText = isPrintDate ? `${new Date().toLocaleTimeString()}: ${type}(${color}): ${text}` : `${type}(${color}): ${text}`;
    console.log(fullText);
  };

  this._defineType = (text) => {
    let resultType = 'information';
    Object.entries(this.properties.keywordOfType).forEach(([type, word]) => {
      if (text.toLowerCase().includes(word)) {
        // console.log(text, word, type);
        resultType = type;
      }
    });

    return resultType;
  };

  this._selectColorByType = (type) => {
    const entries = Object.entries(this.properties.color).filter(([key, value]) => key === type);
    const color = entries[0][1];

    return color;
  };
}
