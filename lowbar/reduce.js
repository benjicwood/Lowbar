var _ = {};

_.reduce = function (array, fun) {
  var returnValue = 0;
  for (var i = 0; i < array.length; i++) {
    returnValue = fun(returnValue, array[i]);
  }
  return returnValue;
};

module.exports = _;
