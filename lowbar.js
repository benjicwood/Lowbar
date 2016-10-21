var _ = require('underscore')



var _ = {};

_.identity = function(x) {
  return x;
};




if (typeof module !== 'undefined') {
  module.exports = _;
}
