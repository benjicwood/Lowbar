/* global describe, it */
var path = require('../lowbar/once');
var expect = require('chai').expect;

var _ = require('../lowbar/once');

describe('_.once', function () {
  it('is a function', function () {
    expect(_.once).to.be.a('function');
  });
//  it('is only called one', function () {
// var sayHelloOnce = _.once(sayHello);
//    expect(sayHelloOnce).to.equal()
//  });
});
