"use strict";

function calcKnots(kmh) {
    return parseFloat(kmh * 0.539956803).toFixed(2);
}

var result = calcKnots(400);
console.log(result);