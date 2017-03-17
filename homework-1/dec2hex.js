
var num = prompt("Enter a number: ");

function dec2hex(num) {
    var result = Number(num).toString(16).toUpperCase();
    alert(result);
}

dec2hex(num);