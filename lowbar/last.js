var _ = {};

_.last = function (array, num) {
  if (array == null) {
    return 0;
  }
  if (num === 0) {
    return [];
  }
  if (!num) {
    return array[array.length - 1];
  }
  var newArray = array.slice(array.length - num, array.length);
  return newArray;
};

module.exports = _;
