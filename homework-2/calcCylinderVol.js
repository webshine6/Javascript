"use strict";

function calcCylinderVol(arr) {
    var r = Number(arr[0]);
    var h = Number(arr[1]);

    var result = Math.PI * Math.pow(r, 2) * h;
    return parseFloat(result).toFixed(3);
}

var result = calcCylinderVol([12, 3]);
console.log(result);