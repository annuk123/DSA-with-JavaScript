//Break and continue are used to control the flow of loops.
//
//The break statement is used to exit a loop prematurely, while the continue statement is used to skip the current iteration of a loop and proceed to the next one.
//
//The break Statement
//The break statement is used to exit a loop prematurely. When the break statement is encountered inside a loop, the loop is terminated, and the program continues with the next statement after the loop.
//
//Syntax
//The syntax of the break statement is as follows:
//
//break;
//Example
//Let's see an example of the break statement in JavaScript:
//
//for (let i = 0; i < 5; i++) {
//    if (i === 3) {
//        break;
//    }
//    console.log(i);
//}
//Outputs:
//
//0
//1
//2
//In the example above, the for loop iterates over the values of the variable i from 0 to 4 (inclusive). When the value of i is 3, the break statement is encountered, and the loop is terminated prematurely.
//
//The continue Statement
//The continue statement is used to skip the current iteration of a loop and proceed to the next one. When the continue statement is encountered inside a loop, the current iteration is skipped, and the loop continues with the next iteration.
//
//Syntax
//The syntax of the continue statement is as follows:
//
//continue;
//Example
//Let's see an example of the continue statement in JavaScript:
//
//for (let i = 0; i < 5; i++) {
//    if (i === 3) {
//        continue;
//    }
//    console.log(i);
//}
//Outputs:
//
//0
//1
//2
//4
//In the example above, the for loop iterates over the values of the variable i from 0 to 4 (inclusive). When the value of i is 3, the continue statement is encountered, and the current iteration is skipped. The loop continues with the next iteration.
//
//The break and continue statements are powerful tools for controlling the flow of loops in JavaScript programs. They allow you to exit a loop prematurely or skip the current iteration based on specified conditions, making your programs more flexible and responsive.