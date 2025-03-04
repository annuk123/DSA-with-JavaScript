//Date: 05/03/2025
//Level : Medium
//Title: Check if Number is Sum of Powers of Three

// Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

// An integer y is a power of three if there exists an integer x such that y == 3x.

// Solution
function checkPowersOfThree(n) {
    while (n > 0) {
        if (n % 3 === 2) return false;
        n = Math.floor(n / 3);
    }
    return true;
}

//Example
let n = 12;
console.log(checkPowersOfThree(n)); //Output: true

//Time Complexity: O(log n)
//Space Complexity: O(1)

//Explanation
//1. Check Remainder of Division by 3
// while (n > 0) {
//     if (n % 3 === 2) return false;
//     n = Math.floor(n / 3);
// }
// Repeat the following steps while n is greater than 0:
// Check if the remainder of n divided by 3 is equal to 2. If true, return false as it is not possible to represent n as the sum of distinct powers of three.
// Divide n by 3 and update its value to the floor of the division result.
//2. Return True if Possible
// return true;
// If the loop completes without returning false, return true as it is possible to represent n as the sum of distinct powers of three.
//3. Example
// let n = 12;
// console.log(checkPowersOfThree(n)); //Output: true



