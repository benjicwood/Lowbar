var _ = {};


var indexOf = function (array, value, thirdArg) {
  if (!array) {
    return -1;
  }

if (thirdArg === true) {
  // binary search
}

// if third arg === number find index of that number eg 2 is 2nd case

if (array.indexOf(value) > 0) {
  return array.indexOf(value);
}
return -1
}

// _.indexOf = function (number, array, thirdArg) {
//   if (!array) {
//     return -1;
//   }
//     var sort = 0
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] >= array[i + 1]) {
//         sort = 1;
//       }
//     }
//     if (sort === 0) {
//       return true;
//     }
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//     return i;
//     }
//   }
// };

module.exports = _;
