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
const person1 = new Persons('Chilaka', 'Jessica', 'Umuebulu', 19);
person1.lastName = 'Ezichi'
console.log(person1);

const persons2 = new Persons('Favour', 'Richards', 'Mgbousimini', 26);
console.log(persons2);

// We've created an empty function called constructor function. Constructor functions are functions that can be used with the NEW operators. the NEW operators is an operator that gives us the ability to initialize the value for the data. THIS is also a constructor function. In JavaScript THIS refers to the object function which it belongs to. It has different values depending on where it is used.

// 1. Create a constructor function for the hangman game.
// 2. Set up two attributes or parameters. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.

const Hangman = function(word, guess) {
    this.word = word;
    this.guess = guess;
}

const game1 = new Hangman('Seeking', 6);
console.log(game1);

const game2 = new Hangman('Love', 10);
console.log(game2);

//1. Set up the word instance property as an array of lower case letters.
//2. Set up another instance property to store guessed letters.
//3. Create a method that gives you the word puzzle back.

const Spyman = function(letter, guess) {
    this.letter = letter.toLowerCase();
    this.guess = guess;
    this.guessedLetters = ['c'];
}

Spyman.prototype.getPuzzle = function() {
    let puzzle = '';
}

const game3 = new Spyman('GuessedLetters', 'a, b, c, d, e, f');
console.log(game3);

// const game1 = new Hangman('Seeking', 6);
// console.log(game1);

// const game2 = new Hangman('Love', 10);
// console.log(game2);

// Prototypal Inheritance
// prototype: This is a special object which is assigned as property of any function you make in JavaScript.

const Vehicle = function(make, model, colour) {
    this.make = make;
    this.model = model;
    this.colour = colour;
}

Vehicle.prototype.getCar = function() {
    return `${this.make} is ${this.colour}`
}

const car = new Vehicle("Mercedez", 2003, "Red");
console.log(car)


// Functions that uses the NEW operator are called constructor functions.

const Individual = function(firstName) {
    this.firstName = firstName;
}

const me = new Individual('Chisom');
console.log(me);