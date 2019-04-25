// Object Oriented Programming - oriented programming means programming based on some concepts

const person = {
    firstName: 'Moya',
    lastName: 'Richards',
    age: 31,
    location: 'Rivers',
    getBio() {
        return `${this.firstName} is ${this.age} and she lives in ${this.location}`
    }
}

const biodata = person.getBio();

console.log(biodata)

const Persons = function(firstName, lastName, location, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.age = age;
}
const me = new Persons('Chilaka', 'Jessica', 'Umuebulu', 19);
me.lastName = 'Ezichi'
console.log(me);

// We've created an empty function called constructor function. Constructor functions are functions that can be used with the NEW operators. the NEW operators is an operator that gives us the ability to initialize the value for the data. THIS is also a constructor function. In JavaScript THIS refers to the object function which it belongs to. It has different values depending on where it is used.