"use strict";

function solve(arr) {
    function isSquare(x) {
        return x > 0 && Math.sqrt(x) % 1 === 0;
    }

    function checkFibonacciNumber(num) {
        if ((isSquare(5*num*num +4) || isSquare(5*num*num - 4))) {
            return "yes";
        }

        return "no";
    }

    var errors = [];

    function table(arr) {

        var start = parseInt(arr[0]);
        var end = parseInt(arr[1]);

        if (arr.length !== 2) {
           errors[errors.length] = 'Array length must be 2.';
           // return 'Array length must be 2.';
        }
        else if(start > end) {
            errors[errors.length] = 'Start must be less than end.';
        }
        else if (start < 1 || end < 1){
            errors[errors.length] = 'Start and end must be positive numbers';
        }
        else {
            var tableTab = '<table>\n';
            var headingTag = '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';

            for(var num=start; num <= end; num++){
                headingTag += '<tr><td>'+num+'</td><td>'+num*num+'</td><td>'+checkFibonacciNumber(num)+'</td></tr>\n';
            }

            var endTag = '</table>';

            var t = tableTab + headingTag  + endTag;
        }

        return t;
    }


    var result = table(arr);


    if (errors.length != 0) {
        errors.forEach(function (e) {
          return e;
        });
    }else  {
        return result;
    }
}


// var arr = [1, 1];
// solve(arr);


