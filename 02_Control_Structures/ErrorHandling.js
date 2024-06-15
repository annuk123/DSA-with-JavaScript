// Error Handling
// Error handling is a mechanism to handle runtime errors such as exceptions, which are thrown by the program.
//
// JavaScript provides a try-catch statement to handle exceptions. The try block contains the code that may throw an exception, and the catch block handles the exception if it occurs.
//
// Syntax
// The syntax of the try-catch statement is as follows:
//
// try {
//     // Code that may throw an exception
// } catch (error) {
//     // Code to handle the exception
// }
// The try block contains the code that may throw an exception. If an exception occurs, the catch block is executed, and the error object contains information about the exception.
//
// Example
// Let's see an example of error handling in JavaScript:

try {
    let x = 1 / 0; // Division by zero
    console.log(x);
} catch (error) {
    console.log('An error occurred:', error.message);
}
// Outputs: An error occurred: Division by zero
// In the example above, the code inside the try block attempts to divide 1 by 0, which results in a division by zero error. The catch block catches the exception and logs an error message to the console.
//
// You can also use the finally block to execute cleanup code, which runs regardless of whether an exception occurs or not.
//
// Syntax
// The syntax of the try-catch-finally statement is as follows:
//
// try {
//     // Code that may throw an exception
// } catch (error) {
//     // Code to handle the exception
// } finally {
//     // Cleanup code
// }
// Example
// Let's see an example of error handling with a finally block in JavaScript:

try {
    let x = 1 / 0; // Division by zero
    console.log(x);
} catch (error) {
    console.log('An error occurred:', error.message);
} finally {
    console.log('Cleanup code');
}
// Outputs:
// An error occurred: Division by zero
// Cleanup code
// In the example above, the finally block contains cleanup code that runs regardless of whether an exception occurs or not. The cleanup code is useful for releasing resources or closing connections.
//
// You can also throw custom exceptions using the throw statement. This allows you to create your own error messages and handle them in the catch block.
//
// Syntax
// The syntax of the throw statement is as follows:
//
// throw new Error('Custom error message');
// Example
// Let's see an example of throwing a custom exception in JavaScript:

try {
    throw new Error('Custom error message');
}
catch (error) {
    console.log('An error occurred:', error.message);
}
// Outputs: An error occurred: Custom error message
// In the example above, the throw statement throws a custom error message, which is caught by the catch block and logged to the console.
//
// Error handling is an essential part of writing robust and reliable JavaScript code. It allows you to gracefully handle exceptions and prevent your program from crashing when errors occur.