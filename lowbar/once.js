var _ = {};

_.once = function (fn) {
  var hasRun = false;
  var result;
  return function () {
    if (!hasRun) {
      hasRun = true;
      result = fn();
    }
  };
};

module.exports = _;
