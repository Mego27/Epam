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
    return this.cities.map(({ city }) => city);
  }

  getAvgTemperatureOfCity(userCity, dayYear) {
    try {
      const infoCity = this.cities.find(({ city }) => city === userCity);

      if (infoCity === undefined) {
        throw new Error('Данного города нет в базе данных!');
      }

      const latitude = infoCity[2];

      if ((dayYear < 1) || (dayYear > 365)) {
        throw new Error('Некорректный день года!');
      }

      return (30 + latitude * ((182 - (202 - dayYear)) / 210 - 1)).toFixed(2);
    } catch (error) {
      return error;
    }
  }
}