"use strict";

var arrObject = ["Pesho", 2, "Gosho",12, 2,
    "true", 9, undefined, 0, "Penka", { bunniesCount : 10},
    [10, 20, 30, 40 ]];

var arrNumbers = arrObject.filter(function (e) {
    return !isNaN(e);
});

var counters = {};
arrNumbers.forEach(function (e) {
   if (counters[e] === undefined) {
       counters[e] = 1;
   }else  {
       counters[e] ++;
   }

});

var objValues = Object.keys(counters).map(function (key) {
    return counters[key];
});

var minNumber = Math.min.apply(null, arrNumbers);
var maxNumber = Math.max.apply(null, arrNumbers);
var mostFrequentNumber = Math.max.apply(null, objValues);

var sortedArr = arrNumbers.sort(function (a, b) {
    return a < b;
});

console.log("Min number: " + minNumber);
console.log("Max number: " + maxNumber);
console.log("Most Frequent Number: " + mostFrequentNumber);
console.log("Sorted array: " + sortedArr);

