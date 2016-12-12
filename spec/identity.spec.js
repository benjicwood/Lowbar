/* global describe, it */
var path = require('../lowbar/identity');
var expect = require('chai').expect;

var _ = require('../lowbar/identity');

describe('_.identity', function () {
  it('_.identity is a function', function () {
    expect(_.identity).to.be.a('function');
  });
  it('_.identity takes one argument', function () {
    expect(_.identity.length).to.equal(1);
  });
  it('_.identity should not return undefined if given an argument of x', function () {
    expect(_.identity('x')).to.not.equal(undefined);
  });
  it('_.identity should return the unmodified argument', function () {
    expect(_.identity('x')).to.equal('x');
  });
});
