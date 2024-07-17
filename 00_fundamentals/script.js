// we can use backticks ` to embed variables in a string
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
//all the above examples will output the same result and all are same with different ways of writing.

//we can write multiline strings using backticks ``
// Example
let multiline = `This is a
multiline
string`;

console.log(multiline);