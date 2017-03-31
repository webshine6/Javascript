if (!Array.prototype.first) {
    Array.prototype.first = function () {
        return this[0];
    }
}

if (!Array.prototype.removeItem) {
    Array.prototype.removeItem = function removeItem(value) {
        for (let i in this) {
            if (this[i] === value) {
                this.splice(i, 1)
            }
        }
       return this;
    };
}

/**
 * Demo #1
 * @type {[*]}
 */
let arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
let resArr = arr.removeItem(1);
console.log(resArr);

/**
 *
 * @type {[*]}
 */
let arr2 = ['hi', 'bye', 'hello' ];
let resArr2 = arr2.removeItem('bye');
console.log(resArr2);