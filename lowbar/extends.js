var _ = {};

_.extends = function (dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }
  return dest;
};

module.exports = _;
