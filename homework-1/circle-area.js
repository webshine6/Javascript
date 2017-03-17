
function calcCircleArea(r) {
    return Math.PI * Math.pow(r,2);
}

document.forms['areaForm'].addEventListener('submit',function (e) {
    e.preventDefault();

    var radius = document.getElementById('radius').value;
    document.getElementById('circleArea').innerText= calcCircleArea(radius);
});

