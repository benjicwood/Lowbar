var _ = {};

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

module.exports = _;
