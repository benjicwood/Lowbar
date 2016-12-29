var _ = {};

_.map = function (array, fn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[i] = fn(newArray[i]); //  or newArray.push(fun(array[i]));
  }
  return newArray;
};

module.exports = _;
