const getDate = require('./get-date');

describe('getDate', () => {
  describe('for 1st January 2021', () => {
    it('should return 2021_1_1 when format not entered', () => {
      expect(getDate(1, 1, 2021)).toBe('2021_1_1');
    });

    it('should return 1.1.2021 when format day.month.year', () => {
      expect(getDate(1, 1, 2021, 'day.month.year')).toBe('1.1.2021');
    });

    it('should return 2021_1_1 when format year_month_day', () => {
      expect(getDate(1, 1, 2021, 'year_month_day')).toBe('2021_1_1');
    });

    it('should return object when format object', () => {
      const testingDate = {
        day: 1,
        month: 1,
        year: 2021,
      };
      expect(getDate(1, 1, 2021, 'object')).toStrictEqual(testingDate);
    });

    it('should return 2020-12-31T21:00:00.000Z when format iso', () => {
      expect(getDate(1, 1, 2021, 'iso')).toBe('2020-12-31T21:00:00.000Z');
    });

    it('should return null when day|month|year incorrect', () => {
      expect(getDate(90, 1, 2021)).toBe(null);
      expect(getDate(1, 34, 2021)).toBe(null);
      expect(getDate(1, 1, 201)).toBe(null);
    });
  });
});
