let findTheOldest = function(people) {
    let maxAge = 0;
    let oldestPerson;
    for (let i = 0; i < people.length; i++){
        let age = findAge(people[i]);
        if (age > maxAge){
            maxAge = age;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
}

function findAge(person){
    if (!person.hasOwnProperty('yearOfDeath')){
        let now = new Date().getFullYear();
        return now - person.yearOfBirth;
    }
    let age = person.yearOfDeath - person.yearOfBirth;
    return age;
}

module.exports = findTheOldest
