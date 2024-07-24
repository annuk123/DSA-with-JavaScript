//Logical Operator
//Logical operators are used to combine multiple conditions in JavaScript. There are three logical operators in JavaScript: AND (&&), OR (||), and NOT (!).

//The AND (&&) Operator
//The AND operator returns true if both operands are true; otherwise, it returns false. The AND operator is represented by two ampersands (&&).

//Syntax
//The syntax of the AND operator is as follows:

//operand1 && operand2;
//Example
//Let's see an example of the AND operator in JavaScript:

let x = 5;
let y = 10;
let z = 15;

if (x < y && y < z) {
    console.log('Both conditions are true');
} else {
    console.log('At least one condition is false');
}
//Outputs: Both conditions are true
//In the example above, the if statement checks if both x is less than y and y is less than z. Since both conditions are true, the message 'Both conditions are true' is displayed.

//The OR (||) Operator
//The OR operator returns true if at least one of the operands is true; otherwise, it returns false. The OR operator is represented by two vertical bars (||).

//Syntax
//The syntax of the OR operator is as follows:

//operand1 || operand2;
//Example
//Let's see an example of the OR operator in JavaScript:

let x1 = 5;
let y1 = 10;
let z1 = 15;

if (x1 > y1 || y1 < z) {
    console.log('At least one condition is true');
}
//Outputs: At least one condition is true
//In the example above, the if statement checks if either x is greater than y or y is less than z. Since the second condition is true, the message 'At least one condition is true' is displayed.

//The NOT (!) Operator
//The NOT operator returns the opposite of the operand. If the operand is true, the NOT operator returns false, and vice versa. The NOT operator is represented by an exclamation mark (!).

//Syntax
//The syntax of the NOT operator is as follows:

//!operand;
//Example
//Let's see an example of the NOT operator in JavaScript:

let x2 = 5;
let y2 = 10;

if (!(x2 > y2)) {
    console.log('x is not greater than y');
}
//Outputs: x is not greater than y
//In the example above, the if statement checks if x is not greater than y using the NOT operator. Since the condition is true, the message 'x is not greater than y' is displayed.


//The logical operators in JavaScript are used to combine multiple conditions and control the flow of execution based on the result. By using logical operators, you can create complex conditions that allow you to build more flexible and responsive programs.

//You can also use logical operators in conjunction with other control structures like if-else statements and loops to create more sophisticated logic in your JavaScript programs.*/