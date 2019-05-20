// ## Defining Classes
// Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

// ## Class declarations
// One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Square" here).

class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// ## Class expressions
// A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).

// Unnamed
let Rectangle = class {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
};
console.log(Rectangle.name);

let Triangle = class Triangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(Triangle.name);


/**
 * Coding story time
 */



let Person = function(){
	this.firstName="Michael";
	this.hobby="Coding";

	let lastName = "Chilaka";

    this.walk = function(){
    return "i can walk";
  }
}
Person.prototype.walk = function(){
  return "hello my name is " + this.firstName;
}

 
/**
 * ________________ THIS ________________
 *
 * "This" is used when an object wants to identify itself. if you always think of yourself as a person object.
 * Objects in JavaScript are easy to understand.
 * 
 * Think of how you would call yourself when you are speaking about you. 
 * You don't always use your name do you, unless you are a bit narcissistic and refer to yourself in the third person.
 * 
 * Anyways, when you refer to yourself you would say "me", and when you are talking about things that you own
 * you would say "my"
 * 
 * In JavaScript there is only one pronoun used, or to be more grammatically correct, only one adjective, and that is "this"
 */

/**
 *________________ NEW ________________
 * when you use the new keyword. the first thing javascript does is create an empty object
 * 
 * so it kind of does this
*/
let a = {}


/** 
* the next thing it does is assign any property or method inside of the constructor to the empty object
* it does that because of the "this" keyword. That word basically says that those properties and methods are mine now, give them to me. notice that it did nothing with lastName, as far as javaScript is concern, lastName doesn't belong to you. if you want it you have to claim ownership with the "this" keyword
*/
a = {
	firstName:"Michael",
	hobby:"Coding",
    walk: function(){
    return "i can walk";
  }
}

/*
the next thing it does, is attach the prototype of the main Object(which in our case is person) to the __Proto__ of the new object;
*/

a.__Proto__ = Person.prototype;

console.log(a);

//-------------------------------------------------------

/**
 * JavaScript does some other things such as create prototype chains, assign constructor properties, but that is other stuff you can look into and research on your own
 */

/** 
now lets create our object properly, doing manually, like we did above, is causing us to miss out on all the cool stuff javascript does for use automatically
*/
 let a2 = new Person();
 console.log(a2);

