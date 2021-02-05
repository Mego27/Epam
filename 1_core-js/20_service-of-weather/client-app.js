class ClientApp {
  constructor(server) {
    this.server = server;
  }

  getAvgTemperature(city, dayYear) {
    return new Promise((resolve, reject) => {
      const randomDelay = Math.random() * 1000 + 500;

      setTimeout(() => {
        resolve(this.server.getAvgTemperatureOfCity(city, dayYear));
      }, randomDelay);
    });
  }

  getDayAndMonth(day) {
    const date = new Date(2021, 0, day);
    const month = date.toLocaleString('default', { month: 'long' });

    return {
      day: date.getDate(),
      month,
    };
  }

  showCities() {
    const randomDelay = Math.random() * 1000 + 500;
    const loadingCities = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.server.getCities());
      }, randomDelay);
    });

    loadingCities.then((receivedCities) => (console.log(receivedCities)));
  }

  showTemperatureOfCity(city, dayOfYear) {
    const gettingAvgTemperature = this.getAvgTemperature(city, dayOfYear);

    gettingAvgTemperature.then((avgTemperature) => {
      const { day, month } = this.getDayAndMonth(dayOfYear);
      const message = `Город ${city}, ${day} ${month}, средняя температура: ${avgTemperature}`;

      console.log(message);
    });
  }
}
