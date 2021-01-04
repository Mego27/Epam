const assert = require('assert');
const newInstance = require('./newInstance');

describe('testing newInstance', () => {
  it('should return {} with constructor \'Test\'', () => {
    function Test() {}

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    assert.deepStrictEqual(actualResult, expectedResult);
  });

  it('should return {} with constructor \'Object\'', () => {
    function Test() {
      return {};
    }

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    assert.deepStrictEqual(actualResult, expectedResult);
  });

  it('should return { a: 10, b: 20} with constructor \'Object\'', () => {
    function Test(a, b) {
      return { a, b };
    }

    const expectedResult = new Test(10, 20);
    const actualResult = newInstance(Test, [10, 20]);

    assert.deepStrictEqual(actualResult, expectedResult);
  });

  it('should return { b: \'complete\'} with constructor \'Test\'', () => {
    function Test() {
      this.b = 'complete';
    }

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    assert.deepStrictEqual(actualResult, expectedResult);
  });
});
