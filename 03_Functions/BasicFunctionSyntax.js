//Functions are one of the core building blocks in JavaScript. They are reusable blocks of code that perform a specific task and can be called multiple times throughout your program. Here's a comprehensive guide to understanding functions in JavaScript:

//Basic Function Syntax

//Function Declaration

//A function declaration defines a function with a specified name.

//javascript
function functionName(parameters) {
    // code to be executed
}


//Example:**

//javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Outputs: Hello, Alice!


//Function Expression

//A function expression defines a function inside an expression, often assigning it to a variable.

//javascript
//const functionName = function(parameters) {
    // code to be executed
//};


//Example:

//javascript
const greet = function(name) {
    console.log("Hello, " + name + "!");
};

greet("Bob"); // Outputs: Hello, Bob!


//Arrow Functions (ES6)

//Arrow functions provide a shorter syntax for writing function expressions and do not have their own `this` context.

//javascript
const functionName = (parameters) => {
    // code to be executed
};


//Example:

//javascript
const greets = (name) => {
    console.log("Hello, " + name + "!");
};

greets("Charlie"); // Outputs: Hello, Charlie!


//For single-expression functions, you can omit the curly braces and the `return` statement:

//javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs: 5


//Parameters and Arguments

//Functions can accept parameters, which act as placeholders for the values (arguments) that are passed to the function when it is invoked.

//Example:

//javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Outputs: 5


//Default Parameters

//You can set default values for function parameters.

//Example:

//javascript
function greet(name = "stranger") {
    console.log("Hello, " + name + "!");
}

greet(); // Outputs: Hello, stranger!
greet("David"); // Outputs: Hello, David!

//Rest Parameters

//Rest parameters allow a function to accept an indefinite number of arguments as an array.

//Example:

//javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15


//Function Return

//Functions can return a value using the `return` statement. If no `return` statement is used, the function returns `undefined`.

//Example:

//javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(2, 3);
console.log(result); // Outputs: 6


// Immediately Invoked Function Expressions (IIFE)

//An IIFE is a function that is executed immediately after it is defined.

//Example:

//javascript
(function() {
    console.log("This function runs immediately!");
})();


// Function Scope

//Functions in JavaScript create their own scope. Variables declared inside a function are not accessible outside the function.

//Example:

//javascript
function scopeExample() {
    let insideFunction = "I'm inside a function!";
    console.log(insideFunction);
}

scopeExample(); // Outputs: I'm inside a function!
// console.log(insideFunction); // Error: insideFunction is not defined


//Closures

//A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.

//Example:

//javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Outputs:
// Outer Variable: outside
// Inner Variable: inside


//Higher-Order Functions

//A higher-order function is a function that takes another function as an argument, returns a function, or both.

//Example:

//javascript
function higherOrderFunction(callback) {
    callback();
}

function sayHello() {
    console.log("Hello!");
}

higherOrderFunction(sayHello); // Outputs: Hello!

// Recursion

//A recursive function is a function that calls itself.

//Example:

//javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Outputs: 120


//Function Methods: `call`, `apply`, and `bind`

// `call`

//The `call` method calls a function with a given `this` value and arguments provided individually.

//Example:

//javascript
function greet() {
    console.log("Hello, " + this.name);
}

const person2 = { name: "Alice" };
greet.call(person2); // Outputs: Hello, Alice


//#### `apply`

//The `apply` method calls a function with a given `this` value and arguments provided as an array.

//Example:

javascript
function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person1 = { name: "Bob" };
greet.apply(person1, ["Hi", "!"]); // Outputs: Hi, Bob!


//bind

//The bind method creates a new function that, when called, has its this value set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

//Example:

//javascript
function greet() {
    console.log("Hello, " + this.name);
}

const person = { name: "Charlie" };
const boundGreet = greet.bind(person);
boundGreet(); // Outputs: Hello, Charlie


//Summary

//Functions in JavaScript are versatile and powerful, allowing for modular, reusable code. They can be declared in various ways, handle multiple parameters, return values, and leverage advanced features like closures and higher-order functions. Understanding functions is essential for effective JavaScript programming.