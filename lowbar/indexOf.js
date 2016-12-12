var _ = {};

_.indexOf = function (num, array, isSorted) {
  if (!array) {
    return -1;
  }
  if (typeof array !== 'object') {
    return -1;
  }
  var sort = 0;
  if (isSorted === 'isSorted') {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= array[i + 1]) {
        sort = 1;
      }
    }
    if (sort === 0) {
      return true;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
};

module.exports = _;
