/* global describe, it */
var path = require('../lowbar/each');
var expect = require('chai').expect;

var _ = require('../lowbar/each');

describe('_.each', function () {
  it('_.each is a function', function () {
    expect(_.each).to.be.a('function');
  });
  it('_.each should take at least 2 arguments', function () {
    expect(_.each.length).to.be.least(2);
  });
  it('_.each test as doubler', function () {
    var inputArray = [1, 2, 3];
    var newArray = [];
    _.each(inputArray, function (arrayElement) {
      newArray.push(arrayElement * 2);
    });
    expect(newArray).to.eql([2, 4, 6]);
  });
  it('_.each test as tripler', function () {
    var inputArray = [1, 2, 3];
    var newArray = [];
    _.each(inputArray, function (arrayElement) {
      newArray.push(arrayElement * 3);
    });
    expect(newArray).to.eql([3, 6, 9]);
  });
  it('_.each test as quadrupler', function () {
    var inputArray = [1, 2, 3];
    var newArray = [];
    _.each(inputArray, function (arrayElement) {
      newArray.push(arrayElement * 4);
    });
    expect(newArray).to.eql([4, 8, 12]);
  });
  it('_.each does nothing empty array', function () {
    var inputArray = [];
    var newArray = [];
    _.each(inputArray, function (arrayElement) {
      newArray.push(arrayElement * 4);
    });
    expect(newArray).to.eql([]);
  });
  it('_.each runs without function', function () {
    var inputArray = [];
    expect(_.each(inputArray));
  });
  it('_.each exits gracefully when no args passed ', function () {
    expect(_.each());
  });
});
