class ClientApp {
  constructor(server) {
    this.server = server;
  }

  getAverageTemperature(city, dayYear) {
    if (!this.server) {
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

    loadingCities.then((receivedCitiesJSON) => (console.log((receivedCitiesJSON))));
  }

  showTemperatureOfCity(city, dayOfYear) {
    const gettingAverageTemperature = this.getAverageTemperature(city, dayOfYear);
    const { day, month } = this.getDayAndMonth(dayOfYear);
    const startTime = Date.now();

    gettingAverageTemperature.then((averageTemperatureJSON) => {
      const endTime = Date.now();

      if (endTime - startTime > 1500) {
        const message = 'Превышено время ожидания';

        throw new Error(message);
      }

      const averageTemperature = JSON.parse(averageTemperatureJSON);
      const message = `Город ${city}, ${day} ${month}, средняя температура: ${averageTemperature}`;

      console.log(message);
    }).catch((errorJSON) => {
      const error = JSON.parse(errorJSON);

      console.log(error);
    });
  }
}
