const newInstance = require('./new-instance');

describe('testing newInstance', () => {
  it('should return {} with constructor Test', () => {
    function Test() {}

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('should return {} with constructor Object', () => {
    function Test() {
      return {};
    }

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('should return { a: 10, b: 20 } with constructor Object', () => {
    function Test(a, b) {
      return { a, b };
    }

    const expectedResult = new Test(10, 20);
    const actualResult = newInstance(Test, [10, 20]);

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('should return { b: complete } with constructor Test', () => {
    function Test() {
      this.b = 'complete';
    }

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    expect(actualResult).toStrictEqual(expectedResult);
  });

  it('should return {} with __proto__ Object', () => {
    function Test() {}
    Test.prototype = 10;

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    expect(actualResult.__proto__).toBe(expectedResult.__proto__);
  });

  it('should return {} with __proto__ { a: 10 }', () => {
    function Test() {}
    Test.prototype = { a: 10 };

    const expectedResult = new Test();
    const actualResult = newInstance(Test);

    expect(actualResult.__proto__).toBe(expectedResult.__proto__);
  });
});
