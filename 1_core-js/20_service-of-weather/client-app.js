class ClientApp {
  constructor(server) {
    this.server = server;
  }

  getAverageTemperature(city, dayYear) {
    if (!(this.server instanceof WeatherServer)) {
      const message = 'Отсутствует подключение к серверу!';
      const error = new Error(message);

      return Promise.reject(error);
    }

    return this.server.getAverageTemperatureOfCity(city, dayYear);
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
    const loadingCities = this.server.getCities();

    loadingCities.then((receivedCities) => (console.log(receivedCities)));
  }

  showTemperatureOfCity(city, dayOfYear) {
    const gettingAverageTemperature = this.getAverageTemperature(city, dayOfYear);
    const { day, month } = this.getDayAndMonth(dayOfYear);
    const startTime = performance.now();

    gettingAverageTemperature.then((averageTemperature) => {
      const endTime = performance.now();

      if (endTime - startTime > 1500) {
        const message = 'Превышено время ожидания';

        throw new Error(message);
      }

      const message = `Город ${city}, ${day} ${month}, средняя температура: ${averageTemperature}`;

      console.log(message);
    }).catch((error) => {
      console.log(error.message);
    });
  }
}
