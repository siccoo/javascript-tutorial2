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

let Rectangle = class {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
}

console