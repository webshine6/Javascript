

function sortLetters(string, boolean) {
    boolean = boolean | false;

    var letters = extractLetters(string);

    if (boolean) {
        return letters.sort();
    }

    letters.sort();
    letters.reverse();
    return letters;

    function extractLetters(str) {
        return str.split("");
    }
}

/**
 * Demo #1
 * @type {string}
 */
var str = "HelloWorld";
var result = sortLetters(str, true);
console.log(result);

/**
 * Demo #2
 * @type {string}
 */
var result2 = sortLetters(str);
console.log(result2);