// Prototypal Inheritance
// prototype: This is a special object which is assigned as property of any function you make in JavaScript. 

const Persons = function(firstName, lastName, location, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.age = age;
}

Persons.prototype.getBio = function() {
    return `${this.firstName} is ${this.age}`
}

const me = new Persons('Chilaka', 'Jessica', 'Umuebulu', 19);
me.lastName = 'Ezichi'
console.log(me.getBio());

const persons2 = new Persons('Favour', 'Richards', 'Mgbousimini', 26);
console.log(persons2.getBio());