var thisValue = this;

if (!Function.prototype.bind) {
  Function.prototype.bind = function bind(context) {
    var func = this;
    var args = [].slice.call(arguments).slice(1);

    return function boundFunction() {
      var extraArgs = [].slice.call(arguments);
      var allArgs = args.concat(extraArgs);

      return func.apply(context, allArgs);
    };
  };
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function forEach(callback, usersThisArg) {
    var thisArg = usersThisArg === undefined ? thisValue : usersThisArg;
    var arr = this;

    for (var i = 0; i < arr.length; i += 1) {
      callback.call(thisArg, arr[i], i, arr);
    }
  };
}

if (!Array.prototype.every) {
  Array.prototype.every = function every(callback, usersThisArg) {
    var thisArg = usersThisArg === undefined ? thisValue : usersThisArg;
    var arr = thisArg;
    var result = true;

    arr.forEach(function isCallbacked() {
      if (!callback.call(thisArg, arr[i], i, arr)) {
        result = false;
      }
    });

    return result;
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function filter(callback, usersThisArg) {
    var thisArg = usersThisArg === undefined ? thisValue : usersThisArg;
    var arr = thisArg;
    var result = [];

    arr.forEach(function fillArray() {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    });

    return result;
  };
}

if (!Array.prototype.find) {
  Array.prototype.find = function find(callback, usersThisArg) {
    var thisArg = usersThisArg === undefined ? thisValue : usersThisArg;
    var arr = thisArg;

    for (var i = 0; i < arr.length; i += 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return arr[i];
      }
    }
  };
}

if (!Array.prototype.map) {
  Array.prototype.map = function map(callback, usersThisArg) {
    var thisArg = usersThisArg === undefined ? thisValue : usersThisArg;
    var arr = thisArg;
    var result = [];

    arr.forEach(function fillCallbackedArray() {
      result.push(callback.call(thisArg, arr[i], i, arr));
    });

    return result;
  };
}

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function reduce(callback, initialValue) {
    var arr = this;
    var result = initialValue;
    var index = 0;

    if (initialValue === undefined) {
      index = 1;
      result = arr[0];

      for (index; index < arr.length; index += 1) {
        result = callback(result, arr[index], index, arr);
      }
    } else {
      arr.forEach(function useCallback() {
        result = callback(result, arr[index], index, arr);
        index += 1;
      });
    }

    return result;
  };
}

if (!Array.prototype.some) {
  Array.prototype.some = function some(callback, usersThisArg) {
    var thisArg = usersThisArg === undefined ? thisValue : usersThisArg;
    var arr = thisArg;
    var result = false;

    arr.forEach(function isCallbacked() {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result = true;
      }
    });

    return result;
  };
}
