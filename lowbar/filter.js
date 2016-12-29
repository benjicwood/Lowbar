var _ = {};

_.filter = function (array, fn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = _;
