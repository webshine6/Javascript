
var input = [
    {
        'name' :  'Пешо',
        'score' : 91
    },
    {
        'name' :  'Лилия',
        'score' : 290
    },
    {
        'name' :  'Алекс',
        'score' : 343
    },
    {
        'name' :  'Габриела',
        'score' : 400
    },
    {
        'name' :  'Жичка',
        'score' : 70
    }
];

var scoreResult = [];

input.forEach(function (e) {
    var score = e.score;
    score = (score * 0.1) + score;
    e.score = score;

    (score > 100) ? e['hasPassed'] = true : e['hasPassed'] = false;

});

input = input.filter(function (e) {
    return e.hasPassed;
});

input.sort(function (a, b) {
    return a.name > b.name;
});


console.log(input);