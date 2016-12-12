var _ = {};

_.memoize = function (func, hash) {
  var cache = {};
  var stringArgs;
  var get = function () {
    if(hash) {
      stringArgs = hash.apply(null, arguments);
    } else {
      stringArgs = JSON.stringify(arguments[0]);
    }
    if(cache[stringArgs]) {
      return cache[stringArgs];
    }
    else {
      var result = func.apply(null, arguments);
      cache[stringArgs] = result;
      return result;
    }
  };
  get.cache = cache;
  return get;
};

module.exports = _;
