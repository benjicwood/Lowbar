/* global describe, it */
var path = require('../lowbar/reject');
var expect = require('chai').expect;

var _ = require('../lowbar/reject');

describe('_.reject', function () {
  it('should be a function', function () {
    expect(_.reject).to.be.a('function');
  });
  it('takes two arguments', function () {
    expect(_.reject.length).to.equal(2);
  });
  it('returns an array', function () {
    var input = [1, 2, 3, 4, 5, 6, 7];
    var fun = function () {
      return;
    };
    expect(_.reject(input, fun)).to.be.a('array');
  });
  it('[1,2,3,4,5,6,7] should return only odd numbers', function () {
    var input = [1, 2, 3, 4, 5, 6, 7];
    var output = [];
    expect(_.reject(input, function (num) {
      return num % 2 === 0;
    })).to.eql([1, 3, 5, 7]);
  });
  it('[2,4,6,8,8,8] should return an empty array when asked for odd numbers', function () {
    var input = [2, 4, 6, 8, 8, 8];
    var output = [];
    expect(_.reject(input, function (num) {
      return num % 2 === 0;
    })).to.eql([]);
  });
});
