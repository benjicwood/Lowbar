/* global describe, it */
var path = require('../lowbar.js');
var expect = require('chai').expect;

var _ = require('../lowbar.js');

describe('_', function () {
    'use strict';

    it('is an object', function () {
        expect(_).to.be.an('object');
    });
  });
  // _.identity
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
// _.first
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
//_.last
describe('_.last', function() {
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
// _.each
describe('_.each', function () {
  it('_.each is a function', function () {
      expect(_.each).to.be.a('function');
  });
  it('_.each should take at least 2 arguments', function () {
      expect(_.each.length).to.be.least(2);
  });
  it('_.each test as doubler', function () {
      var inputArray=[1,2,3];
      var newArray=[];
      _.each(inputArray,function(arrayElement){newArray.push(arrayElement*2);})
      expect(newArray).to.eql([2,4,6]);
  });
  it('_.each test as tripler', function () {
      var inputArray=[1,2,3];
      var newArray=[];
      _.each(inputArray,function(arrayElement){newArray.push(arrayElement*3);})
      expect(newArray).to.eql([3,6,9]);
  });
  it('_.each test as quadrupler', function () {
      var inputArray=[1,2,3];
      var newArray=[];
      _.each(inputArray,function(arrayElement){newArray.push(arrayElement*4);})
      expect(newArray).to.eql([4,8,12]);
  });
  it('_.each does nothing empty array', function () {
      var inputArray=[];
      var newArray=[];
      _.each(inputArray,function(arrayElement){newArray.push(arrayElement*4);})
      expect(newArray).to.eql([]);
  });
  it('_.each runs without function', function () {
      var inputArray=[];
      expect(_.each(inputArray));
  });
  it('_.each exits gracefully when no args passed ', function () {
      expect(_.each());
  });
});
//_.indexOf
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
    expect(_.indexOf(2, [1,2,3])).to.eql(1);
  });
  it('returns the index number of a given string from an array of strings', function () {
    expect(_.indexOf('a', ['a', 'b', 'c'])).to.eql(0);
    expect(_.indexOf('c', ['a', 'b', 'c'])).to.eql(2);
  });
  it('returns true if array is sorted', function () {
    expect(_.indexOf(1, [1,2,3], 'isSorted')).to.equal(true);
  });
  it('returns the index of given value if array is unsorted', function () {
    expect(_.indexOf(2, [1,2,3,2,1], 'isSorted')).to.equal(1);
  });
});
//_.filter
describe('_.filter', function () {
  it('is a function', function () {
    expect(_.filter).to.be.a('function');
  });
});
