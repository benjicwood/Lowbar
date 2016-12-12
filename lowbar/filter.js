var _ = {};

_.filter = function (array, fun) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (fun(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = _;
