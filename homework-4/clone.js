if (!Object.prototype.clone) {
    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}

function compareObjects(obj, objCopy) {
    return obj == objCopy;
}


var a = {
    name: 'Pesho',
    age: 21
};

/**
 * Demo #1
 *
 */
var b = a; // not a deep copy
var result = compareObjects(a, b);
console.log(result);

/**
 * Demo #2
 */
var c = clone(a); // a deep copy
var result2 = compareObjects(a, c);
console.log(result2);
