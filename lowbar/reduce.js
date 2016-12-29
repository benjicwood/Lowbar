var _ = {};

_.reduce = function (array, fn, initial) {
  var returnValue = initial;
  for (var i = 0; i < array.length; i++) {
    returnValue = fn(returnValue, array[i]);
  }
  return returnValue;
};

module.exports = _;
