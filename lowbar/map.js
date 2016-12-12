var _ = {};

_.map = function (array, fun) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    newArray.push(fun(array[i]));
  }
  return newArray;
};

module.exports = _;
