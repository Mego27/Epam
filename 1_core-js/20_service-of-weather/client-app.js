import ServerError from './server-error.js';
import ClientError from './client-error.js';

class ClientApp {
  constructor(serverAPI) {
    this.serverAPI = serverAPI;
  }

  requestAverageTemperature(city, dayYear) {
    if (!this.serverAPI) {
      return Promise.reject(new ServerError(520, 'Отсутствует подключение к серверу!'));
    }

    const startTime = Date.now();

    return this.serverAPI.getAverageTemperatureOfCity(city, dayYear)
      .then((responseJSON) => {
        const endTime = Date.now();

        if (endTime - startTime > 3500) {
          return Promise.reject(new ClientError(408, 'Превышено время ожидания'));
        }

        const response = JSON.parse(responseJSON);

        if (response.error) {
          return Promise.reject(response.error);
        }

        return response;
      });
  }

  getWeekDayAndMonth(day) {
    const date = new Date(2021, 0, day);
    const month = date.toLocaleString('default', { month: 'long' });

    return {
      day: date.getDate(),
      month,
    };
  }

  showCities() {
    this.serverAPI.getCities()
      .then((citiesJSON) => (console.log((citiesJSON))));
  }

  showTemperatureOfCity(city, dayOfYear) {
    this.requestAverageTemperature(city, dayOfYear)
      .then((response) => {
        const { value: averageTemperatureValue } = response;
        const { day, month } = this.getWeekDayAndMonth(dayOfYear);
        const message = `Город ${city}, ${day} ${month}, средняя температура: ${averageTemperatureValue}`;

        console.log(message);
      }).catch(({ code, message }) => {
        console.log(`${code}: ${message}`);
      });
  }
}
