let input = `
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>index</title>
    <script src="/yourScript.js" defer></script>
</head>
<body>
    <div id="outerDiv">
        <div class="first">
            <div><div>hello</div></div>
        </div>
        <div>hi<div></div></div>        
        <div>I am a div</div>
    </div>
</body>
</html>`;

let regexp = /<div/g;

function countDivs(input) {
    let count = 0;
    while(regexp.exec(input) !== null) {
        count++;
    }

    return count;
}

/**
 * Demo #1
 */
let result = countDivs(input);
console.log(result);