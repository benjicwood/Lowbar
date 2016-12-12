/* global describe, it */
var path = require('../lowbar/filter');
var expect = require('chai').expect;

var _ = require('../lowbar/filter.js');

describe('_.filter', function () {
  it('is a function', function () {
    expect(_.filter).to.be.a('function');
  });
  it('takes two arguments', function () {
    expect(_.filter.length).to.equal(2);
  });
  it('returns an array', function () {
    var input = [1, 2, 3, 4, 5, 6, 7];
    var fun = function () {
      return;
    };
    expect(_.filter(input, fun)).to.be.a('array');
  });
  it('var input=[1,2,3,4,5,6,7] should return only even numbers', function () {
    var input = [1, 2, 3, 4, 5, 6, 7];
    var output = [];
    // var fun=function(inputElement){ if(inputElement%2==0);{return true;}};
    expect(_.filter(input, function (num) {
      return num % 2 == 0;
      })).to.eql([2, 4, 6]);
  });
  it('var input=[1,2,3,4,5,6,7,8] should return only even numbers', function () {
    var input = [1, 2, 3, 4, 5, 6, 7, 8];
    var output = [];
    expect(_.filter(input, function (num) {
      return num % 2 === 0;
    })).to.eql([2, 4, 6, 8]);
  });
  it('var input=[1,3,5,7,9] should return only even numbers', function () {
    var input = [1, 3, 5, 7, 9];
    var output = [];
    expect(_.filter(input, function (num) {
      return num % 2 === 0;
    })).to.eql([]);
  });
});
