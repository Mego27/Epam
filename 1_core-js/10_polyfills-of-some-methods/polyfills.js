if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...args) {
    return function (args) {
      return func.apply(context, args);
    };
  };
}

if (!Array.prototype.every) {
  Array.prototype.every = function (callback, thisArg) {
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
  Array.prototype.filter = function (callback, thisArg) {
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
  Array.prototype.find = function (callback, thisArg) {
    var arr = this;
    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return arr[i];
      }
    }
  };
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg = undefined) {
    var arr = this;
    for (var i = 0; i < arr.length; i += 1) {
      callback.call(thisArg, arr[i], i, arr);
    }
  };
}

if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg = undefined) {
    var arr = this;
    var result = [];
    for (var i = 0; i < arr.length; i += 1) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }

    return result;
  };
}

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue = 0) {
    var arr = this;
    var result = initialValue;
    for (var i = 0; i < arr.length; i += 1) {
      result += callback(arr[i], i, arr);
    }

    return result;
  };
}

if (!Array.prototype.some) {
  Array.prototype.some = function (callback, thisArg) {
    var arr = this;
    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }

    return false;
  };
}
