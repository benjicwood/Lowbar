//var _ = require('underscore')

var _ = {};

_.identity = function (x) {
    return x;
};


_.first = function (array, num) {
  if (array == null) {  return 0;  }
  if (!num) {  return array[0];    }
  if (num > array.length) {
      num = array.length  }
  var newArray = [];
  for (i = 0; i < num; i++) {
  newArray.push(array[i]);
  }
  return newArray;
};

_.last = function (array, num) {
  if (array == null) {  return 0; }
  if (num == 0) {  return []; };
  if (!num) { return array[array.length-1]; }
  var newArray = array.slice(array.length-num, array.length);
  return newArray;
};

_.each = function(array, func) {
  if(!array) {  return;  };
  for (i = 0; i < array.length; i++) {
  func(array[i]);
    };
};

_.indexOf = function (num, array, isSorted) {
  if(!array) { return -1 }
  if(typeof array !== 'object') { return -1 }
  var sort = 0
  if (isSorted == 'isSorted') {
    for (var i = 0; i < array.length; i++) {
    if (array[i] >= array[i+1])
     { sort = 1; }
//return false;
  }
  if (sort == 0) {
    return true
  }
}
  for (var i = 0; i < array.length; i++) {
  if (array[i] == num) {
  return i
    };
};

};

_.filter = function (array, fun) {
var newArray=[];
  for(i=0;i<array.length;i++){
    if(fun(array[i])){
      newArray.push(array[i]);
    }
  }
return newArray;
};

_.reject = function (array, fun) {
var newArray=[];
  for(i=0;i<array.length;i++){
    if(!fun(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
};


if (typeof module !== 'undefined') {
    module.exports = _;
}
