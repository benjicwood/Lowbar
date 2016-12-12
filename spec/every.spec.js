/* global describe, it */
var path = require('../lowbar/every');
var expect = require('chai').expect;

var _ = require('../lowbar/every');

describe('_.every', function () {
  it('should be a function', function () {
    expect(_.every).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.every.length).to.be.least(2);
  });
  it('should return true for _.every([1,2,3],3)', function () {
    var input = [2, 4, 6];
    expect(_.every(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    })).to.equal(true);
  });
  it('should return false for _.every([2,5,6)', function () {
    var input = [2, 4, 6];
    expect(_.every(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    })).to.equal(true);
  });
});
