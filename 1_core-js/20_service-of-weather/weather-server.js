import ServerError from 'server-error.js';

class WeatherServer {
  constructor() {
    this.cities = [
      {
        city: 'Кампала',
        country: 'Уганда',
        latitude: 0,
      },
      {
        city: 'Пхукет',
        country: 'Тайланд',
        latitude: 8,
      },
      {
        city: 'Санто-Доминго',
        country: 'Доминикана',
        latitude: 18,
      },
      {
        city: 'Дубай',
        country: 'Арабские Эмираты',
        latitude: 25,
      },
      {
        city: 'Шанхай',
        country: 'Китай',
        latitude: 31,
      },
      {
        city: 'Лос-Анжелес',
        country: 'США',
        latitude: 34,
      },
      {
        city: 'Мадрид',
        country: 'Испания',
        latitude: 40,
      },
      {
        city: 'Париж',
        country: 'Франция',
        latitude: 49,
      },
      {
        city: 'Лондон',
        country: 'Великобритания',
        latitude: 52,
      },
      {
        city: 'Москва',
        country: 'Россия',
        latitude: 56,
      },
      {
        city: 'Осло',
        country: 'Норвегия',
        latitude: 60,
      },
      {
        city: 'Мурманск',
        country: 'Россия',
        latitude: 69,
      },
    ];
  }

  getCities() {
    const cities = this.cities.map(({ city }) => city);
    return this.sendData(cities);
  }

  getAverageTemperatureOfCity(cityName, dayYear) {
    try {
      const result = {
        error: null,
      };
      const city = this.cities.find(({ city }) => city === cityName);
      let latitude;

      if (city === undefined) {
        result.error = new ServerError(400, 'Данного города нет в базе данных!');
      } else {
        latitude = city.latitude;
      }

      if ((dayYear < 1) || (dayYear > 365)) {
        result.error = new ServerError(400, 'Некорректный день года!');
      }

      result.value = (30 + latitude * ((182 - (202 - dayYear)) / 210 - 1)).toFixed(2);

      return this.sendData(result, false);
    } catch (error) {
      const errorMessage = `500: ${error.message}`;
      return this.sendData(errorMessage, true);
    }
  }

  sendData(data, isInternalServerError) {
    return new Promise((resolve, reject) => {
      const randomDelay = Math.random() * 1500 + 500;
 
      setTimeout(() => {
        const jsonData = JSON.stringify(data);

        isInternalServerError ? reject(jsonData) : resolve(jsonData);
      }, randomDelay);
    });
  }

  getAPI() {
    return {
      getCities: this.getCities.bind(this),
      getAverageTemperatureOfCity: this.getAverageTemperatureOfCity.bind(this),
    };
  }
}
