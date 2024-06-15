//Control structures in JavaScript are fundamental building blocks that control the flow of execution in a program. They include conditionals, loops, and error handling mechanisms. In this article, we will discuss the if-else statement in JavaScript.

// The if-else statement is used to execute a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

// Syntax
// The syntax of the if-else statement is as follows:

//if...else statement syntax
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// In the example above, the if statement checks if the age variable is greater than or equal to 18. If the condition is true, the message "You are an adult." is displayed. Otherwise, the message "You are a minor." is displayed.

// Nested if-else Statements
// You can also nest if-else statements within each other to handle multiple conditions. Here's an example:

let num = 0;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// In the example above, the program checks if the num variable is greater than 0, less than 0, or equal to 0, and displays the appropriate message based on the condition.

// The if-else statement is a powerful tool for controlling the flow of execution in JavaScript programs. It allows you to execute different blocks of code based on specified conditions, making your programs more flexible and responsive.*/

//other examples
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Outputs: Grade: B

//switch
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Wednesday



