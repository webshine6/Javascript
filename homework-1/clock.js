

function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById('clock').innerHTML
        = hours + ' : ' + minutes + ' : ' + seconds;

}


setInterval('clock()', 1000);
