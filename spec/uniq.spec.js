/* global describe, it */
var path = require('../lowbar/uniq');
var expect = require('chai').expect;

var _ = require('../lowbar/uniq');

describe('_.uniq', function () {
  it('should be a function', function () {
    expect(_.uniq).to.be.a('function');
  });
  it('should 1-3 arguments', function () {
    expect(_.uniq.length).to.be.least(1);
    expect(_.uniq.length).to.be.most(3);
  });
  it('should return [1] for [1,1]', function () {
    var inputArray = [1, 1];
    expect(_.uniq(inputArray)).to.eql([1]);
  });
  it('should return [1,2] for [1,1,2]', function () {
    var inputArray = [1, 1, 2];
    expect(_.uniq(inputArray)).to.eql([1, 2]);
  });
  it('should return [1,2,3] for [1,1,2,1,2,3]', function () {
    var inputArray = [1, 1, 2, 1, 2, 3];
    expect(_.uniq(inputArray)).to.eql([1, 2, 3]);
  });
});
