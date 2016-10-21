/* global describe, it */
var path = require('../lowbar.js');
var expect = require('chai').expect;

var _ = require('../lowbar.js');

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  it('_.identity is a function', function () {
    expect(_.identity).to.be.a('function');
    });
  it('_.identity takes one argument', function () {
    expect(_.identity.length).to.equal(1);
  });
  it('_.identity should return something', function () {
    var x
    expect(_.identity(x)).to.equal(x);
  })
  it('_.indentity should return the unmodified argument', function () {
    expect(_.identity('x')).to.equal('x');
  })

  describe('#each', function () {
    it('is a function', function() {
      expect(_.each).to.be.a('function');
    });
  });
});
