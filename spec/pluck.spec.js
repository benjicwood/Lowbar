/* global describe, it */
var path = require('../lowbar/pluck');
var expect = require('chai').expect;

var _ = require('../lowbar/pluck');

describe('_.pluck', function () {
  it('is a function', function () {
    expect(_.pluck).to.be.a('function');
  });
  it('takes two arguments', function () {
    expect(_.pluck.length).to.equal(2);
  });
  it('returns an array', function () {
    expect(_.pluck()).to.be.a('array');
  });
  it('should return an array of names from an array of objects', function () {
    var input = [{name: 'Jeff', age: 50}, {name: 'Bob', age: 39}, {name: 'Jack', age: 54}];
    expect(_.pluck(input, 'name')).to.eql(['Jeff', 'Bob', 'Jack']);
  });
});
