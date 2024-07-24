//Ternary Operator
//The ternary operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.
//
//Syntax
//The syntax of the ternary operator is as follows:
//
//condition ? expression1 : expression2;
//The ternary operator works as follows:
//
//The condition is evaluated.
//If the condition is true, expression1 is executed.
//If the condition is false, expression2 is executed.
//Example
//Let's see an example of the ternary operator in JavaScript:
//
let age = 18;
let message = age >= 18 ? 'You are an adult.' : 'You are a minor.';
console.log(message);
//Outputs: You are an adult.
//In the example above, the ternary operator checks if the age variable is greater than or equal to 18. If the condition is true, the message 'You are an adult.' is assigned to the message variable. Otherwise, the message 'You are a minor.' is assigned to the message variable.
//
//The ternary operator is a concise way to write conditional statements in JavaScript. It can be used to simplify code and make it more readable by reducing the number of lines needed for simple if-else statements.