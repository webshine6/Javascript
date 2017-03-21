"use strict";


var numbers = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

var scores = numbers.filter(function (e) {
   return e > 0 && e < 400;
});

scores = scores.map(function (e) {
   return e -= e * .20;
});

var sortedScores = scores.sort(function (a, b) {
    return a > b;
});

console.log(sortedScores);