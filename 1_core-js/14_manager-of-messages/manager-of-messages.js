function ManagerOfMessages() {
  this.properties = {
    isPrintDate: false,
    color: {
      information: 'white',
      warning: 'yellow',
      error: 'red',
    },
    isEnabledDelay: true,
    delay: 1000,
    _isCoolDown: false,
  };

  this.printMessage = (text, type = this._defineType(text)) => {
    const color = this._selectColorByType(type);
    const { isPrintDate } = this.properties;

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

      setTimeout(() => this.properties.isCoolDown = false, this.properties.delay);
    }
  };

  this._print = function printFunc(text, type, color, isPrintDate) {
    const fullText = isPrintDate ? `${new Date().toLocaleTimeString()}: ${type}(${color}): ${text}` : `${type}(${color}): ${text}`;
    console.log(fullText);
  };

  this._defineType = (text) => {
    if (text.toLowerCase().includes('ошибка')) {
      return 'error';
    }

    if (text.toLowerCase().includes('предупреждение')) {
      return 'warning';
    }

    return 'information';
  };

  this._selectColorByType = (type) => {
    const entries = Object.entries(this.properties.color).filter(([key, value]) => key === type);
    const color = entries[0][1];

    return color;
  };
}
