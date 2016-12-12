var _ = {};

_.pluck = function (array, propertyName) {
  var newArray = [];
  if (!array) {
    return [];
  }
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i][propertyName]);
  }
  return newArray;
};

module.exports = _;
