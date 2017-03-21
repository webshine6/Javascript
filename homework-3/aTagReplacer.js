/**
 * Replace a tag - variant I
 * @param str
 * @returns {XML|void|string}
 */
function replaceATag(str) {
    var objMatch = {
        '<a' : '[URL',
        '">'  : ']',
        '"'   : '',
        '</a>' : '[/URL]'
    };

    var strRes = str.replace(/(<a)|(">)|(<\/a>)|"/g, function (match) {
        return objMatch[match];
    });

    return strRes;
}

// test input
var str = '<ul>' +
    '<li>' +
        '<a href="http://softuni.bg">SoftUni' +
        '</a>' +
    '</li>' +
    '</ul>';

// test output
console.log(replaceATag(str));

/**
 * variant II
 * @param str
 * @returns {XML|string}
 */

var replaceATag = function(str) {
    return str
        .replace(/(<a)/g, '[URL')
        .replace(/">/g, '"]')
        .replace(/(<\/a>)/g, '[/URL]')
        .replace(/"/g, '');
};

// test output
//var res = replaceATag(str);
//console.log(res);