// var _ = require('underscore')

var _ = {};

// identity

_.identity = function (x) {
  return x;
};

// first

_.first = function (array, num) {
  if (array == null) {
    return 0;
  }
  if (!num) {
    return array[0];
  }
  if (num > array.length) {
    num = array.length;
  }
  var newArray = [];
  for (var i = 0; i < num; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

// last

_.last = function (array, num) {
  if (array == null) {
    return 0;
  }
  if (num === 0) {
    return [];
  }
  if (!num) {
    return array[array.length - 1];
  }
  var newArray = array.slice(array.length - num, array.length);
  return newArray;
};

// each

_.each = function (array, func, context) {
  context = context || null;
  if (!array) {
    return;
  }
  if (array instanceof Array) {
    for (var i = 0; i < array.length; i++) {
      func(array[i], i, array);
    }
  } else {
    for (var key in array) {
      func.apply(context, [array[key], key, array]);
    }
  }
};

// // mycontext = {a: foo}
// _.each([1,2,3], function (e) {
//   this.a = 'i was changed';
// }, myContext);

// indexOf

_.indexOf = function (num, array, isSorted) {
  if (!array) {
    return -1;
  }
  if (typeof array !== 'object') {
    return -1;
  }
  var sort = 0;
  if (isSorted === 'isSorted') {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= array[i + 1]) {
        sort = 1;
      }
    }
    if (sort === 0) {
      return true;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
};

// filter

_.filter = function (array, fun) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (fun(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// reject

_.reject = function (array, fun) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!fun(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// uniq

_.uniq = function (array) {
  var uniqArray = [];
// this.each ?
this.each(array, function (e) {
  // is the element in the uniq?
if (uniqArray.indexOf(e) === -1) {
  uniqArray.push(e)
}
  // if not push it in
});
 return uniqArray
}

// map

_.map = function (array, fun) {
  var newArray = [];
  for(var i=0; i < array.length; i++) {
    newArray.push(fun(array[i]));
  }
  return newArray;
};

// pluck

_.pluck = function (array, propertyName) {
  var newArray = [];
  if (!array) {
    return [];
  }
  for (var i=0; i < array.length; i++) {
    newArray.push(array[i][propertyName]);
  }
  return newArray;
};

// reduce

_.reduce = function (array, fun) {
  var returnValue = 0;
  for (var i = 0; i < array.length; i++) {
    returnValue = fun(returnValue, array[i]);
  }
  return returnValue;
};

// contains

_.contains = function (list, val) {
  return (_.indexOf(list, val) === -1);
};

// every

_.every = function (list, fun) {
  for (var i = 0; i < list.length; i++) {
    if (!fun(list[i])) {
      return false;
    }
  } return true;
};

_.some = function (array, func) {
  array.forEach(function (e) {
    if (this.e === true) {
      return true;
    }
    return false;
  });
};

// extends

_.extends = function (dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }
  return dest;
};

// var ben = {name: 'Ben', age: '27', hobbies: [1,2,3]};
// var benClone = _.extends({}, ben);
// ben.hobbies.push(4);

// once

_.once = function (fn) {
  var hasRun = false;
  var result;
  return function () {
    if (!hasRun) {
      hasRun = true;
      result = fn();
    }
  };
};

// function sayHello () {
//   console.log('Hello');
// }

_.memoize = function (func) {
var cache = {};

return function () {
var stringyArgument = JSON.stringify(arguments[0]);
  if(cache[stringyArgument]) {
    return cache[stringyArgument];
  }
    else {
      var result = func.apply(null, arguments);
      cache[stringyArgument] = result
  return result
  }
}
}

if (typeof module !== 'undefined') {
    module.exports = _;
}
