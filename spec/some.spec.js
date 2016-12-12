var path = require('../lowbar/some');
var expect = require('chai').expect;

var _ = require('../lowbar/some');

describe('_.some', function () {
  it('is a function', function () {
    expect(_.some).to.be.a('function');
  });
  it('should return true for [1,2,3], contains even number', function () {
    var input = [1, 2, 3];
    expect(_.some(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    }));
  });
  it('should return false for [1,3,5], contains even number', function () {
    var input = [1, 3, 5];
    expect(_.some(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    }));
  });
});
