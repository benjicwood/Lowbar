var _ = require('underscore')


var _ = {};

_.identity = function (x) {
    return x;
};


_.first = function (array, num) {

    if (array == null) {
        return 0;
    }
    else if (!num) {
        return array[0];
    }
    else {
        (num > array.length)
        {
            num = array.length
        }
        console.log(num);
        var newArray = [];
        for (i = 0; i < num; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
};

if (typeof module !== 'undefined') {
    module.exports = _;
}
