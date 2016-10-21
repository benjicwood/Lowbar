//var _ = require('underscore')


var _ = {};

_.identity = function (x) {
    return x;
};


_.first = function (array, num) {

    if (array == null) {
        return 0;
    }
    if (!num) {
        return array[0];
    }
    if
        (num > array.length) {
            num = array.length
        }
        var newArray = [];
        for (i = 0; i < num; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    };

_.last = function (array, num) {
  if (array == null) {
      return 0;
}
  if (num == 0) {
    return [];
  };

  if (!num) {
    return array[array.length-1];
  }

  var newArray = array.slice(array.length-num, array.length);

  return newArray;
};

_.each = function(array, func) {
    if(!array) {
        return;
    };

    for (i = 0; i < array.length; i++) {
        func(array[i]);
    };
};


if (typeof module !== 'undefined') {
    module.exports = _;
}
