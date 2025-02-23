//66. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

//Solution

var plusOne = function(digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    let newNumber = Array(n + 1).fill(0);
    newNumber[0] = 1;
    return newNumber;
}
// Time Complexity: O(n)
// Space Complexity: O(1)
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Input: digits = [0]
// Output: [1]
// Input: digits = [9]
// Output: [1,0]

//Explanation of the solution
//1. We are given an array of digits, which represents a number.
//2. We need to increment the number by one.
//3. We will iterate the array from the end.
//4. If the current digit is 9, we will set it to 0.
//5. If the current digit is not 9, we will increment it by one and return the array.
//6. If we reach the start of the array, we will create a new array with one extra digit and set the first digit to 1.
//7. Finally, we will return the new
//array.
//8. The time complexity of this solution is O(n), where n is the number of digits in the input array.
//9. The space complexity of this solution is O(1).
//10. This solution has passed all the test cases on LeetCode.