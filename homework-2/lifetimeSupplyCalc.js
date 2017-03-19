"use strict";

function calcSupply(age, maxAge, food, foodPerDay) {
    var result = (maxAge - age ) * 365 * foodPerDay;
    return result + "kg of " + food + " would be enough until I am " + maxAge + " years old";
}

var calc = calcSupply(16, 102, "nuts", 1.1);
console.log(calc);