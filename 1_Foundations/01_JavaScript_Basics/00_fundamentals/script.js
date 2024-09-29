//We can use backticks ` to embed variables in a string
// Example1
let user = 'john';
let age = 30;
let message = `Hello, ${user}! You are ${age} years old.`;

console.log(message); // Hello, john! You are 30 years old.

// Example2
let user1 = 'john',
    age1 = 30,
    message1 = `Hello, ${user1}! You are ${age1} years old.`;

console.log(message1); // Hello, john! You are 30 years old.

// Example3
let user2 = 'john'
    , age2 = 30
    , message2 = `Hello, ${user2}! You are ${age2} years old.`;

console.log(message2); // Hello, john! You are 30 years old.
//all the above examples will output the same result and all are the same with different ways of writing.

//we can write multiline strings using backticks ``
// Example
let multiline = `This is a
multiline
string`;

console.log(multiline);


//We can also declare two variables and copy data from one to another
// Example

let hello = 'Hello, World!';

let msg = hello; // Copy 'Hello, World!' to msg

//now two variables hello and msg will have the same value 'Hello, World!'
console.log(msg); // Hello, World!
console.log(hello); // Hello, World!


//An assignment without use strict
//Normally, we need to define a variable before using it. but in the old times, it was technically possible to create a variable by a mere assignment of a value without using let, const or var. This still works, but it's considered bad practice. f we don't use "use strict", then the assignment will silently create a global variable. For example:

// Example
// bad practice
//note; no "use strict" in this file
num = 5; // No let or const
console.log(num); // 5

//In the example above, the variable num is created by assignment without using let or const. This is considered bad practice because it creates a global variable. 

// If we use "use strict", then the code will throw a ReferenceError because num is not defined. 

"use strict";
num = 5; // ReferenceError: num is not defined


//Uppercase constants
//It's common to use uppercase variable names for constants. This makes it easier to identify constants in the code. For example:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FFA500";

//...when we want to use a constant, we can easily recognize it in the code because of the uppercase variable name.

let color = COLOR_ORANGE;
console.log(color); // #FFA500
// capital-named constants are only used as aliases for “hard-coded” values.
