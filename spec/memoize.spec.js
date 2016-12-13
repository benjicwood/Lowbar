/* global describe, it */
var path = require('../lowbar/memoize');
var expect = require('chai').expect;
var sinon = require('sinon');

var _ = require('../lowbar/memoize');

describe('_.memoize', function () {
  it('is a function', function () {
    expect(_.memoize).to.be.a('function');
  });
  it('takes 2 parameters', function () {
    expect(_.memoize.length).to.equal(2);
  });
  it('stores the cache of the previous call result', function () {
    function square (a) {
      return a * a;
    }
    var squareSpy = sinon.spy(square);
    var memoizedSquare = _.memoize(squareSpy);
    memoizedSquare(3);
    memoizedSquare(6);
    memoizedSquare(3);
    memoizedSquare(6);
    expect(squareSpy.calledTwice).to.equal(true);
    expect(memoizedSquare.cache).to.eql({'3': 9, '6': 36});
  });
});
