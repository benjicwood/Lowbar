/* global describe, it */
var path = require('../lowbar/first');
var expect = require('chai').expect;

var _ = require('../lowbar/first.js');

describe('_.first', function () {
  it('_.first is a function', function () {
    expect(_.first).to.be.a('function');
  });
  it('_.first should take a least one argument', function () {
    expect(_.first.length).to.be.least(1);
  });
  it('_.first([5,4,3,2,1]) should return 5', function () {
    expect(_.first([5, 4, 3, 2, 1])).to.equal(5);
  });
  it('_.first([5,4,3,2,1], 3) should return [5,4,3]', function () {
    expect(_.first([5, 4, 3, 2, 1], 3)).to.eql([5, 4, 3]);
  });
  it('_.first passed no arguments should return 0', function () {
    expect(_.first()).to.equal(0);
  });
  it('_.first var array = var expected', function () {
    var array = [1, 2, 3];
    var expected = [1, 2, 3];
    expect(_.first(array, 8)).to.eql(expected);
  });
});
