if (!Function.prototype.bind) {
  Function.prototype.bind = function bind(context, ...args) {
    const func = this;

    return function boundFunction(...extraAgs) {
      return func.apply(context, [...args, ...extraAgs]);
    };
  };
}

if (!Array.prototype.every) {
  Array.prototype.every = function every(callback, thisArg) {
    var arr = this;

    for (var i = 0; i < arr.length; i += 1) {
      if (!callback.call(thisArg, arr[i], i, arr)) {
        return false;
      }
    }

    return true;
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function filter(callback, thisArg) {
    var arr = this;
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }

    return result;
  };
}

if (!Array.prototype.find) {
  Array.prototype.find = function find(callback, thisArg) {
    var arr = this;

    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return arr[i];
      }
    }
  };
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function forEach(callback, thisArg = this) {
    var arr = this;

    for (var i = 0; i < arr.length; i += 1) {
      callback.call(thisArg, arr[i], i, arr);
    }
  };
}

if (!Array.prototype.map) {
  Array.prototype.map = function map(callback, thisArg = this) {
    var arr = this;
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }

    return result;
  };
}

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function reduce(callback, initialValue) {
    var arr = this;
    var result = initialValue;
    var i = 0;

    if (initialValue === undefined) {
      i += 1;
      result = arr[0];
    }

    for (i; i < arr.length; i += 1) {
      result = callback(result, arr[i], i, arr);
    }

    return result;
  };
}

if (!Array.prototype.some) {
  Array.prototype.some = function some(callback, thisArg) {
    var arr = this;

    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }

    return false;
  };
}
