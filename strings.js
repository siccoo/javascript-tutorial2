// Using String Data types
let name = 'Ichie';
console.log(name)

let fName = 'Ichie';
let lName = 'Obinna';
let fullName = fName+ ' ' +lName;
console.log(fullName)


let city = 'Aba';
let country = 'Nigeria';
let loca = city + ', ' + country;
console.log(loca)

//Using Numbers Data types
let num = 5.5;

console.log(num)

let x = 11;
let numb = (x + 1) * 2;

console.log(numb)

let age = 29;
let dogYears = (age + 1) / 7;

console.log(dogYears)

let studentScore = 18;
let maxScore = 20; 
let percentage = (studentScore / maxScore) * 100;

console.log(percentage)

//Using Variable Data types
// 1. You cant define a variable more than once
let petName = 'Rock';
petName = 'Ceasar';

console.log(petName)


// 2. There are rules for naming a variable, a variable name must start with letters, or special characters _ or $.
let test$ = 2
let result = 3 + 4;

// 3. Variable names cannot be reserved keywords such as LET, VAR, and CONST.
let llet = 12

// Temperature Converter

let fahrenheit = 50;
let celsius = (fahrenheit - 32) * 5 / 9;
let kelvin = (fahrenheit + 459.67) * 5 / 9;

console.log(celsius, kelvin)


// Using the Boolean Operator Data type
// === is the equality operator
// !== is the not equal operator
// < is the less than operator
// > is the greater than operator
// <= is the less than or equal to operator
// >= is the greater than or equal to operator
// let temp = 31
// let isFreezing = temp === 31;

//console.log(isFreezing)

let Age = 29;
let isChild = Age <= 7;
let isSenior = Age >= 65;

// let assume = Age === isChild;
// let assume1 = Age >= isSenior;

// console.log(assume, assume1)


console.log(isChild, isSenior)

// Using IF Statement

let tempa = 31 
// let isRaining = tempa <= 31

if (tempa <= 31){
    console.log('Its raining outside')
}


//console.log(isRaining)


let years = 66

if(years<= 7){
    console.log('Hey kid you are not up to age!')
}

if (years >= 65) {
    console.log('Senior, You are way too older')
}


// Using Else Statement. if and else goes together in a given statement
let isAccountLocked = false

if (isAccountLocked) {
    console.log('Your account is actually locked')
} else {
    console.log('You are welcome')
}

let weather = 180

if (weather <= 32) {
    console.log('Its pretty cold out there')
} else if (weather >= 110) {
    console.log('Its so hot out there')
} else {
    console.log('Go for it. its pretty nice outside')
}


// Using Logical and Operator - True if both sides are true. False otherwise
// Logical or Operator - True if at least one side is true. False otherwise
// && - and symbol
// || - or symbol

let isOneGuestVegan = true;
let isTwoGuestVegan = true;

if (isOneGuestVegan && isTwoGuestVegan) {
    console.log('Only offer up vegan dishes')
} else if (isOneGuestVegan || isTwoGuestVegan) {
    console.log('Make sure to offer up some vegan option')
} else{
    console.log('Offer up anything on the menu')
}

// Variable scope - A variable scope is what defines the variable 
// accessibilty if its within the proposed scope
// JS uses lexical scoping which is sometime to as Static scoping
// We have 2 types of scope
// Global scope - This refers to all of the things defined outside your code blocks.
// Local scope - This refers to the things defined inside the code blocks.

let var1 = 'varOne';  //- Global scope

if (true){
    console.log(var1)
    let var2 = 'varTwo';
    console.log(var2)

    if (true){
        let var4 = 'varFour';
        console.log(var4)
    }
}

if (true) {
    let var3 = 'varThree';
    console.log(var3)
}


//  FUNCTION
// Functions are little self programs with a little bit of codes.
// We have three important parts to a function; they are the input, code, output.

let square = function (){
    let result = num * num;
    return result
}

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return convertFahrenheitToCelsius
}

let tmpOne = convertFahrenheitToCelsius (32)
let tmpTwo = convertFahrenheitToCelsius (68)

console.log(tmpOne)
console.log(tmpTwo)


// Undefined for a variable
let namey

//namey = 'Jen'

if (namey === undefined) {
    console.log('Please provide a name')
} else {
    console.log(namey)
}

// Undefind for function argument
// Undefined as function return value

let squarey = function (num32) {
    console.log(num32)
}

let resu = squarey (num) 
    console.log(resu)


// Null as a assigned value

let old = 29

old = null

console.log(old)


// Multiple argument 
let add = function (a, b) {
    return a + b 
}

let resulte = add(10, 1)
console.log(resulte)


// Argument Defaults
let getTip = function (total, tipPercent = .2){
    return total * tipPercent 
} 

let tip = getTip(150, .5)
console.log(tip)

// Using the Regular string and concatenation
let petN = 'Hal'
let petA = 3
let bio = petN + ' is ' + petA + ' years old.'
    console.log(bio)

// Using the Template string
let altBio = `${petN} is ${petA} years old.`
console.log(altBio)

// Building a Grade Calculator based on percentage and alphabets

let stDntScore = 16;
let totPosScore = 20;
let gp = 'B';

let score = function (stDntScore, totPosScore) {
    return (stDntScore / totPosScore) * 100
}

let avScore = score(stDntScore, totPosScore) 
console.log(avScore)

let totalScore = `You scored ${avScore}%, the grade point ${gp}.`
console.log(totalScore)

// Object basics

let myDetails = {
    name: 'Chilaka',
    age: 18,
    loction: 'Aba'
}

console.log(`I am ${myDetails.name}, ${myDetails.age} years old. I live in ${myDetails.loction}.`)

myDetails.age = myDetails.age + 1

console.log(`I am ${myDetails.name}, ${myDetails.age} years old. I live in ${myDetails.loction}.`)

// Using object

let convertFahrenheit = function (fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) *  5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let temppp = convertFahrenheit (64)
console.log(temppp)

// Claswork 
let ObAccount = {
    name: 'Ichie Laka',
    expenses: 100,
    income: 1000
}

let addIncome = function (acct, amount){
    account.income = account.income + amount
}

let addExpense = function (acct, amount) {
    account.expenses = acoount.expenses + amount 
}

let y = (ObAccount, 1000)
console.log(addIncome)

// Objects methods

// let restaurant = {
//     name: 'Crunchies',
//     guestCapacity: 200,
//     guestCount: 0,
//     checkAvailability: function (partySize) {
//         let seatsLeft = this.guestCapacity - this.guestCount
//         return partySize <= seatsLeft

//         //console.log(partySize)
//        // return false
//     },
//     seatParty: function (partySize) {
//         this.guestCount = this.guestCount + partySize
//     },
//     removeParty: function (partySize) {
//         this.guestCount = this.guestCount - partySize
//     } 
// }
// restaurant.seatParty(198)
// console.log(restaurant.checkAvailability(4))
// restaurant.removeParty(5)
// console.log(restaurant.checkAvailability(4))

// Exploring string method

let isValidPassword = function (password) {
    return password.length > 56 && !password.includes(password)
}

console.log(isValidPassword('onyinyechi'));
console.log(isValidPassword('onyinyechi1234'));
console.log(isValidPassword('onyinyechipassword'));


// Exploring Number methods

let nu = 183.981

console.log(nu.toFixed(5))
console.log(Math.floor(nu))
console.log(Math.ceil(nu))
console.log(Math.round(nu))


// Guessing game: Create a function that is going to take a persons guess and check if their
// guess was correct. if its correct it should return true, if not it should return false
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor (Math.random () * (max - min + 1)) + min
    return guess === randomNum 
}
console.log(makeGuess(2))

// Constant Variables
// Constant based variables cannot have their values reassigned.
// We use constant for code readability
// We use constant to tell any developer that the variable can't be changed.

const gradeCalc = function (score, totalScore){
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90){
        letterGrade = 'A'
    } else if (percent >= 80){
        letterGrade = 'B'
    } else if (percent >= 70){
        letterGrade = 'C'
    } else if (percent >= 60){
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} ${percent}%`
}

const res = gradeCalc(11, 20)
console.log(res)

const people ={
    age: 27
}

people.age = 31
console.log(people)

// Arrays
// Create a todo list of all arrangements for the week

let weekend = [
    'Todo 1: I will read my books',
    'Todo 2: I will do some washing',
    'Todo 3: I will go to work',
    'Todo 4: I will brush my teeth',
    'Todo 5: I must code everyday'
]

// console.log(weekend.length-0)
// console.log(weekend[2])
// console.log(weekend[3])
weekend.splice(2, 1)
weekend.push('We are doing it')
weekend.shift('')
//console.log(weekend.pop[1])

for (let i = 2; i >= 0; i--) {
    console.log(i)
}

for (let i = weekend.length -1; i >= 0; i--) {
    console.log(weekend[i])
}

let duties = 
[ {title: 'Order cat food', body: 'You have to order it'}, 
{title: 'Clean kitchen', body: 'Clean the utensils too'}, 
{title: 'Buy food', body: 'Make sure you get the food quickly'}, 
{title: 'Work well', body: 'Patient dog eat the fatest bone'}, 
{title: 'Do exercise', body: 'It builds your body daily'} ]

// console.log(`You have ${duties.length} duties daily`)
// for (let i = 0; i < duties.length; i++) {
//     console.log(duties[i])
// }

// const index = duties.findIndex(function (note, index){
//     return note.body === 'It builds your body daily'
// })

// console.log(index)

let norm = 
[ {
    text: 'Order cat food', completed: true 
}, {
    text: 'Clean kitchen', completed: false 
}, {
    text: 'Buy food', completed: true 
}, {
    text: 'Work well', completed: false 
}, {
    text: 'Do exercise', completed: true 
} ]

const findNote = function (notes, normText){
    return notes.findIndex(function(nor){
        return nor.text.toLowerCase () === normText.toLowerCase()
    })
    if (index > -1){
    notes.splice(index, 1)
}
}

 findNote(norm, 'Buy food')
console.log(norm)

// FILTERING ARRAYS
let words = ['Banana', 'Pineapple', 'Guava', 'Mango', 'Pear', 'Cucumber'];
const end = words.filter((word) => word.length > 6 );
console.log(end)

const getThingsToDo = function (norm){
    return norm.filter(function(nor){
        return nor.completed === true
    });
}
console.log(getThingsToDo(norm))

// SORTING ARRAYS
let months = ['Jan', 'Aug', 'Sept', 'Oct', 'Feb', 'Mar', 'Dec'];
months.sort();
console.log(months)

let figure = [1, 20, 21, 0, 30, 5, 6, 7];
figure.sort();
console.log(figure)

const playground = [{
    sports: 'Football',
    detail: "I'm playing football",
}, {
    sports: 'Basketball',
    detail: "I'm playing basketball",
}, {
    sports: 'Soccer',
    detail: "I'm playing soccer",
}, {
}]

// const playGroup = function (playground){
//     playground.sort(function(a, b) {
//          if (a.sports.toLowerCase() < b.sports.toLowerCase()){
//              return -1
//          } else if (b.sports.toLowerCase() < a.sports.toLowerCase()){
//              return 1
//          } else {
//              return 0
//          }
//     });
// }

// playGroup(playground)
console.log(playground)

// localStorage.setItem('location', 'Philadelphia');
// console.log(localStorage.getItem('location'))
// localStorage.removeItem('location');
// localStorage.clear();





