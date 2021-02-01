export default class WeatherServer {
  constructor() {
    this.cities = [
      ['Кампала', 'Уганда', 0],
      ['Пхукет', 'Тайланд', 8],
      ['Санто-Доминго', 'Доминикана', 18],
      ['Дубай', 'Арабские Эмираты', 25],
      ['Шанхай', 'Китай', 31],
      ['Лос-Анжелес', 'США', 34],
      ['Мадрид', 'Испания', 40],
      ['Париж', 'Франция', 49],
      ['Лондон', 'Великобритания', 52],
      ['Москва', 'Россия', 56],
      ['Осло', 'Норвегия', 60],
      ['Мурманск', 'Россия', 69],
    ];
  }

  getCities() {
    return this.cities.map(([city, country, latitude]) => city);
  }

  getAvgTemperatureOfCity(userCity, dayYear) {
    const infoCity = this.cities.find(([city]) => city === userCity);
    const latitude = infoCity[2];

    return (30 + latitude * ((182 - (202 - dayYear)) / 210 - 1)).toFixed(2);
  }
}
