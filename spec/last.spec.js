var path = require('../lowbar/last');
var expect = require('chai').expect;

var _ = require('../lowbar/last');

describe('_.last', function () {
  it('_.last is a function', function () {
    expect(_.last).to.be.a('function');
  });
  it('_.last should take a least one argument', function () {
    expect(_.last.length).to.be.least(1);
  });
  it('_.last passed no arguments should return 0', function () {
    expect(_.last()).to.equal(0);
  });
  it('_.last([5, 4, 3, 2, 1], 3) should return [3, 2, 1]', function () {
    expect(_.last([5, 4, 3, 2, 1], 3)).to.eql([3, 2, 1]);
  });
  it('_.last([5, 4, 3, 2, 1]) should return 1', function () {
    expect(_.last([5, 4, 3, 2, 1])).to.equal(1);
  });
  it('_.last([5, 4, 3, 2, 1], 10) should return [5, 4, 3, 2, 1]', function () {
    expect(_.last([5, 4, 3, 2, 1], 10)).to.eql([5, 4, 3, 2, 1]);
  });
  it('_.last([5, 4, 3, 2, 1], num>0) should return an array', function () {
    expect(_.last([5, 4, 3, 2, 1], 1)).to.be.a('array');
  });
  it('_.last num value is 0 should return an empty array', function () {
    expect(_.last([5, 4, 3, 2, 1], 0)).to.eql([]);
  });
});
