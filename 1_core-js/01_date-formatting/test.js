const assert = require('assert');
const getDate = require('./getDate');

describe('for 1st January 2021 testing function getDate', () => {
  it('should return 2021_1_1 when format not entered', () => {
    assert.strictEqual(getDate(1, 1, 2021), '2021_1_1');
  });

  it('should return 1.1.2021 when format \'day.month.year\'', () => {
    assert.strictEqual(getDate(1, 1, 2021, 'day.month.year'), '1.1.2021');
  });

  it('should return 2021_1_1 when format \'year_month_day\'', () => {
    assert.strictEqual(getDate(1, 1, 2021, 'year_month_day'), '2021_1_1');
  });

  it('should return object when format \'object\'', () => {
    const testingDate = {
      day: 1,
      month: 1,
      year: 2021,
    };
    assert.deepStrictEqual(getDate(1, 1, 2021, 'object'), testingDate);
  });

  it('should return 2020-12-31T21:00:00.000Z when format \'iso\'', () => {
    assert.strictEqual(getDate(1, 1, 2021, 'iso'), '2020-12-31T21:00:00.000Z');
  });

  it('should return null when day|month|year incorrect', () => {
    assert.strictEqual(getDate(90, 1, 2021), null);
    assert.strictEqual(getDate(1, 34, 2021), null);
    assert.strictEqual(getDate(1, 1, 201), null);
  });
});
