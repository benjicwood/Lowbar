var _ = {};

_.uniq = function (array) {
  var uniqArray = [];
  this.each(array, function (e) {
    if (uniqArray.indexOf(e) === -1) {
      uniqArray.push(e);
    }
  });
  return uniqArray;
};

module.exports = _;
