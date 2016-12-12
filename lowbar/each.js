var _ = {};

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

module.exports = _;
