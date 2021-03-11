class ClientApp {
  constructor(serverAPI) {
    this.serverAPI = serverAPI;
  }

  getAverageTemperature(city, dayYear) {
    if (!this.serverAPI) {
      const message = '520: Отсутствует подключение к серверу!';
      const error = new Error(message);

      return Promise.reject(error);
    }

    return this.serverAPI.getAverageTemperatureOfCity(city, dayYear);
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
    const loadingCities = this.serverAPI.getCities();

    loadingCities.then((receivedCitiesJSON) => (console.log((receivedCitiesJSON))));
  }

  showTemperatureOfCity(city, dayOfYear) {
    const gettingAverageTemperature = this.getAverageTemperature(city, dayOfYear);
    const { day, month } = this.getDayAndMonth(dayOfYear);
    const startTime = Date.now();

    gettingAverageTemperature.then((responseJSON) => {
      const endTime = Date.now();

      if (endTime - startTime > 1500) {
        const message = '408: Превышено время ожидания';
        const error = new Error(message);

        console.log(error.message);
        return;
      }

      const response = JSON.parse(responseJSON);

      if (response.error !== null) {
        console.log(response.error);

        return;
      }

      const { value: averageTemperature } = response;
      const message = `Город ${city}, ${day} ${month}, средняя температура: ${averageTemperature}`;

      console.log(message);
    }).catch((errorJSON) => {
      const error = JSON.parse(errorJSON);

      console.log(error);
    });
  }
}
