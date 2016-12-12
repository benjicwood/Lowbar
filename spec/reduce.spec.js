/* global describe, it */
var path = require('../lowbar/reduce');
var expect = require('chai').expect;

var _ = require('../lowbar/reduce');

describe('_.reduce', function () {
  it('should be a function', function () {
    expect(_.reduce).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.reduce.length).to.be.least(2);
  });
  it('[1,2,3] should return 6', function () {
    var input = [1, 2, 3];
    expect(_.reduce(input, function (a, b) {
      return a + b;
    })).to.eql(6);
  });
});
