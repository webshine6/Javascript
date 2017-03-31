
function findYoungestPerson(people) {
    var p = peopleWithSmartphone(people);

    function peopleWithSmartphone(people) {
        var withSmartphone = [];
        people.forEach(function (person) {
            if (person.hasSmartphone) {
                withSmartphone.push(person)
            }
        });

        return withSmartphone;
    }

    return p.sort(function (p1, p2) {
        return p1.age - p2.age;
    })[0];
}

/**
 * Demo #1
 */

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];


var youngestPerson = findYoungestPerson(people);
console.log('The youngest person is ' + youngestPerson.firstname + ' ' + youngestPerson.lastname) ;