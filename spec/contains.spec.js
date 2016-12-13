/* global describe, it */
var path = require('../lowbar/contains');
var expect = require('chai').expect;

var _ = require('../lowbar/contains');

describe.only('_.contains', function () {
  it('should be a function', function () {
    expect(_.contains).to.be.a('function');
  });
  it('takes at least 2 arguments', function () {
    expect(_.contains.length).to.be.least(2);
  });
  it('returns a boolean', function () {
    expect(_.contains()).to.be.a('boolean');
  });
  it('returns true when the second argument value is present in the first argument array', function () {
    expect(_.contains([1, 2, 3], 3)).to.equal(true);
    expect(_.contains(['a', 'b', 'c'], 'c')).to.equal(true);
    expect(_.contains(['10', 10, true, 4], 10)).to.equal(true);
  });
  it('returns false when the second argument value is not present in the first argument array', function () {
  //  expect(_.contains([1, 2, 3], 4)).to.equal(false);
    expect(_.contains(['a', 'b', 'c'], 'd')).to.equal(false);
  //  expect(_.contains(['10', 10, true, 4], 5)).to.equal(false);
  });
});
