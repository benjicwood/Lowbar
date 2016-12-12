/* global describe, it */
var path = require('../lowbar/contains');
var expect = require('chai').expect;

var _ = require('../lowbar/contains');

describe('_.contains', function () {
  it('should be a function', function () {
    expect(_.contains).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.contains.length).to.be.least(2);
  });
  it('should return true for _.contains([1,2,3],3)', function () {
    expect(_.contains([1, 2, 3], 3)).to.equal(true);
  });
  it('should return true for [,a,b,c],c', function () {
    expect(_.contains(['a', 'b', 'c'], 'c')).to.equal(true);
  });
});
