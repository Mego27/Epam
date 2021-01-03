if (!Function.prototype.bind) {
  Function.prototype.bind = function bind(context) {
    var func = this;
    var args = Array.from(arguments).slice(1);

    return function boundFunction() {
      var extraArgs = Array.from(arguments).slice(1);
      var allArgs = args.concat(extraArgs);

      return func.apply(context, allArgs);
    };
  };
}

if (!Array.prototype.every) {
  var globalThis = this;
  Array.prototype.every = function every(callback, thisArg) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;

    for (var i = 0; i < arr.length; i += 1) {
      if (!callback.call(thisArg, arr[i], i, arr)) {
        return false;
      }
    }

    return true;
  };
}

if (!Array.prototype.filter) {
  var globalThis = this;
  Array.prototype.filter = function filter(callback, thisArg) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;
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
  var globalThis = this;
  Array.prototype.find = function find(callback, thisArg) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;

    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return arr[i];
      }
    }
  };
}

if (!Array.prototype.forEach) {
  var globalThis = this;
  Array.prototype.forEach = function forEach(callback, thisArg) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;

    for (var i = 0; i < arr.length; i += 1) {
      callback.call(thisArg, arr[i], i, arr);
    }
  };
}

if (!Array.prototype.map) {
  var globalThis = this;
  Array.prototype.map = function map(callback, thisArg = this) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }

    return result;
  };
}

if (!Array.prototype.reduce) {
  var globalThis = this;
  Array.prototype.reduce = function reduce(callback, initialValue) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;
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
  var globalThis = this;
  Array.prototype.some = function some(callback, thisArg) {
    thisArg === undefined ? globalThis : thisArg;
    var arr = thisArg;

    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }

    return false;
  };
}
