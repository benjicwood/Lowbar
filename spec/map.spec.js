/* global describe, it */
var path = require('../lowbar/map');
var expect = require('chai').expect;

var _ = require('../lowbar/map');

describe('_.map', function () {
  it('should be a function', function () {
    expect(_.map).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.map.length).to.be.least(2);
  });
  it('[2,4,6] should return [4,8,12]', function () {
    var input = [2, 4, 6];
    expect(_.map(input, function (num) {
      return num * 2;
    })).to.eql([4, 8, 12]);
  });
  it('[2,4,6] should return [1,3,5]', function () {
    var input = [2, 4, 6];
    expect(_.map(input, function (num) {
      return num - 1;
    })).to.eql([1, 3, 5]);
  });
});
