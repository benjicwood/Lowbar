/* global describe, it */
var path = require('../lowbar/indexOf');
var expect = require('chai').expect;

var _ = require('../lowbar/indexOf');

describe('_.indexOf', function () {
  it('is a function', function () {
    expect(_.indexOf).to.be.a('function');
  });
  it('takes three arguments', function () {
    expect(_.indexOf.length).to.equal(3);
  });
  it('returns -1 if argument isn\'t an array', function () {
    expect(_.indexOf('hello')).to.equal(-1);
    expect(_.indexOf(1)).to.equal(-1);
  });
  it('returns the index number of a given number from an array of numbers', function () {
    expect(_.indexOf(2, [1, 2, 3])).to.eql(1);
  });
  it('returns the index number of a given string from an array of strings', function () {
    expect(_.indexOf('a', ['a', 'b', 'c'])).to.eql(0);
    expect(_.indexOf('c', ['a', 'b', 'c'])).to.eql(2);
  });
  it('returns true if array is sorted', function () {
    expect(_.indexOf(1, [1, 2, 3], 'isSorted')).to.equal(true);
  });
  it('returns the index of given value if array is unsorted', function () {
    expect(_.indexOf(2, [1, 2, 3, 2, 1], 'isSorted')).to.equal(1);
  });
});
