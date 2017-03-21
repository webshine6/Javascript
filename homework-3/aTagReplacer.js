
// function replaceATag(str) {
//
// }

var str = '<ul>' +
    '<li>' +
        '<a href="http://softuni.bg">SoftUni' +
        '</a>' +
    '</li>' +
    '</ul>';


// variant I

var objMatch = {
    '<a' : '[URL',
    '">'  : ']',
    '"'   : '',
    '</a>' : '[/URL]'
};

var strRes = str.replace(/(<a)|(">)|(<\/a>)|"/g, function (match) {
    return objMatch[match];
});

console.log(strRes);

// variant II

var replaceATag = function(str) {
    return str
        .replace(/(<a)/g, '[URL')
        .replace(/">/g, '"]')
        .replace(/(<\/a>)/g, '[/URL]')
        .replace(/"/g, '');
};

//var res = replaceATag(str);
//console.log(res);