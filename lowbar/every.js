var _ = {};

_.every = function (list, fun) {
  for (var i = 0; i < list.length; i++) {
    if (!fun(list[i])) {
      return false;
    }
  } return true;
};

module.exports = _;
