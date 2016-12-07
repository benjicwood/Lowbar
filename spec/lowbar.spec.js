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

// _.identity


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

// _.last

describe('_.last', function () {
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

// _.indexOf

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
    expect(_.indexOf(2, [1, 2, 3])).to.eql(1);
  });
  it('returns the index number of a given string from an array of strings', function () {
    expect(_.indexOf('a', ['a', 'b', 'c'])).to.eql(0);
    expect(_.indexOf('c', ['a', 'b', 'c'])).to.eql(2);
  });
  it('returns true if array is sorted', function () {
    expect(_.indexOf(1, [1, 2, 3], 'isSorted')).to.equal(true);
  });
  it('returns the index of given value if array is unsorted', function () {
    expect(_.indexOf(2, [1, 2, 3, 2, 1], 'isSorted')).to.equal(1);
  });
});

// _.filter

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

describe('_.reject', function () {
  it('should be a function', function () {
    expect(_.reject).to.be.a('function');
  });
  it('takes two arguments', function () {
    expect(_.reject.length).to.equal(2);
  });
  it('returns an array', function () {
    var input = [1, 2, 3, 4, 5, 6, 7];
    var fun = function () {
      return;
    };
    expect(_.reject(input, fun)).to.be.a('array');
  });
  it('[1,2,3,4,5,6,7] should return only odd numbers', function () {
    var input = [1, 2, 3, 4, 5, 6, 7];
    var output = [];
    expect(_.reject(input, function (num) {
      return num % 2 === 0;
    })).to.eql([1, 3, 5, 7]);
  });
  it('[2,4,6,8,8,8] should return an empty array when asked for odd numbers', function () {
    var input = [2, 4, 6, 8, 8, 8];
    var output = [];
    expect(_.reject(input, function (num) {
      return num % 2 === 0;
    })).to.eql([]);
  });
});
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

describe('_.map', function () {
  it('should be a function', function () {
    expect(_.map).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.map.length).to.be.least(2);
  });
  it('[2,4,6] should return [4,8,12]', function () {
    var input = [2, 4, 6];
    expect(_.map(input, function (num) {
      return num * 2;
    })).to.eql([4, 8, 12]);
  });
  it('[2,4,6] should return [1,3,5]', function () {
    var input = [2, 4, 6];
    expect(_.map(input, function (num) {
      return num - 1;
    })).to.eql([1, 3, 5]);
  });
});
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

describe('_.reduce', function () {
  it('should be a function', function () {
    expect(_.reduce).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.reduce.length).to.be.least(2);
  });
  it('[1,2,3] should return 6', function () {
    var input = [1, 2, 3];
    expect(_.reduce(input, function (a, b) {
      return a + b;
    })).to.eql(6);
  });
});
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
describe('_.every', function () {
  it('should be a function', function () {
    expect(_.every).to.be.a('function');
  });
  it('should take at least 2 arguments', function () {
    expect(_.every.length).to.be.least(2);
  });
  it('should return true for _.every([1,2,3],3)', function () {
    var input = [2, 4, 6];
    expect(_.every(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    })).to.equal(true);
  });
  it('should return false for _.every([2,5,6)', function () {
    var input = [2, 4, 6];
    expect(_.every(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    })).to.equal(true);
  });
});
describe('_.some', function () {
  it('is a function', function () {
    expect(_.some).to.be.a('function');
  });
  it('should return true for [1,2,3], contains even number', function () {
    var input = [1, 2, 3];
    expect(_.some(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    }));
  });
  it('should return false for [1,3,5], contains even number', function () {
    var input = [1, 3, 5];
    expect(_.some(input, function (num) {
      if (num % 2 === 0) {
        return true;
      }
    }));
  });
});
describe('_.once', function () {
  it('is a function', function () {
    expect(_.once).to.be.a('function');
  });
//  it('is only called one', function () {
// var sayHelloOnce = _.once(sayHello);
//    expect(sayHelloOnce).to.equal()
//  });
});

describe('_.memoize', function () {
  it('is a function', function () {
    expect(_.memoize).to.be.a('function');
  });
  it('takes 2 parameters', function () {
    expect(_.memoize.length).to.equal(2);
  });
  it('stores the cache of the previous call result', function () {
    function square (a) {
      return a * a;
    }
    var squareSpy = sinon.spy(square);
    var memoizedSquare = _.memoize(squareSpy);
    memoizedSquare(3);
    memoizedSquare(6);
    memoizedSquare(3);
    memoizedSquare(6);
    expect(squareSpy.calledTwice).to.equal(true);
    expect(memoizedSquare.cache).to.eql({'3': 9, '6': 36});
  });
});

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
