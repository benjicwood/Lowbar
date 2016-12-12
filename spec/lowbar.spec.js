/* global describe, it */
var path = require('../lowbar.js');
var expect = require('chai').expect;
var sinon = require('sinon');

var _ = require('../lowbar.js');

describe('_', function () {
  'use strict';
  it('is an object', function () {
    expect(_).to.be.an('object');
  });
});

module.exports = _;

/*

_.pluck = function (array, propertyName) {
  var newArray=[];
  if (!array) {
    return [];
  }
  for(i=0;i<array.length;i++){
  newArray.push(array[i][propertyName]);
  };
  return newArray;
};
/*
_.reduce = function () {
var accumulator, newList;
if (initialValue === list[0]); {
newList = list.slice(1);
}
else {
  accumulator = initialValue;
  newList = list;
}
_.each(newList, function (value, key, list) {
  accumulator = reducer(accumulator, value, key, list);
});

return accumulator;

};

_.memoize = function (func) {
var memoize = function (key) {
  var cache = {};
  var address = '' + key;
  if (cache[address] === undefined) {
    cache[address] = func.apply(this, arguments);
  }
  return cache[address];
};

memoize.cache = {};

return memoize;
};

_.memoize = function (func) {
var cache = {};

return function () {
var stringyArgument = JSON.stringify(arguments[0]);
  cache[stringyArgument] = func.apply(null, arguments);
  return func.apply(null, arguments)
}
}

var speedySquare = _.memoize(function (n) {
return n * n
});

var firstTime = new Date().getTime();
speedySquare(66);
var endTime = newDate().getTime() - firstTime;

var secondStart = new Date().getTime();
speedySquare(66);
var secondEndTime = newDate().getTime() - secondStart;

*/

// var _ = {};
//
// _.memoize = function (func) {
// var cache = {};
//
// return function () {
// var stringyArgument = JSON.stringify(arguments[0]);
//   if(cache[stringyArgument]) {
//     return cache[stringyArgument];
//   }
//     else {
//       var result = func.apply(null, arguments);
//       cache[stringyArgument] = result
//   return result
//   }
// }
// }
