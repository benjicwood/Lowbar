var _ = {};

_.contains = function (list, val) {
  return (_.indexOf(list, val) === -1);
};

module.exports = _;
