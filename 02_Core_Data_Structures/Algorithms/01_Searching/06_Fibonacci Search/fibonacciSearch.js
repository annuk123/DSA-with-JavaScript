//fibonacciSearch.js

// Fibonacci search is a searching algorithm that finds the position of a target value within a sorted array. It is an improvement over binary search for unbounded arrays and can be used to find the position of an element in a sorted array of infinite size.

function fibonacciSearch(arr, target) {
    let n = arr.length;
    let fibM2 = 0;
    let fibM1 = 1;
    let fibM = fibM2 + fibM1;

    while (fibM < n) {
        fibM2 = fibM1;
        fibM1 = fibM;
        fibM = fibM2 + fibM1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibM2, n - 1);

        if (arr[i] < target) {
            fibM = fibM1;
            fibM1 = fibM2;
            fibM2 = fibM - fibM1;
            offset = i;
        } else if (arr[i] > target) {
            fibM = fibM2;
            fibM1 -= fibM2;
            fibM2 = fibM - fibM1;
        } else {
            return i;
        }
    }

    if (fibM1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
console.log(fibonacciSearch(arr, target)); // Output: 5

// Time complexity: O(log n)
// Space complexity: O(1)
// Where n is the number of elements in the input array. 

// Fibonacci search has a time complexity of O(log n) and a space complexity of O(1). It is an efficient algorithm for searching in sorted arrays and is particularly useful for unbounded arrays where the size of the array is not known in advance. Fibonacci search is an improvement over binary search for unbounded arrays and can be used to find the position of an element in a sorted array of infinite size.

// Explanation of the Fibonacci search algorithm:
// The Fibonacci search algorithm works by dividing the array into Fibonacci numbers and using these numbers to determine the search interval. It starts with two Fibonacci numbers, fibM2 and fibM1, and calculates the next Fibonacci number, fibM, until it exceeds the size of the array. It then uses the Fibonacci numbers to determine the search interval and performs a comparison to find the target value.

// The Fibonacci search algorithm has the following steps:
// 1. Start with two Fibonacci numbers, fibM2 = 0 and fibM1 = 1.
// 2. Calculate the next Fibonacci number, fibM = fibM2 + fibM1, until fibM > n.
// 3. Initialize an offset variable to -1.
// 4. While fibM > 1:
//     a. Calculate the index i = min(offset + fibM2, n - 1).
//     b. If arr[i] < target, update the Fibonacci numbers and offset.
//     c. If arr[i] > target, update the Fibonacci numbers.
//     d. If arr[i] = target, return the index i.
// 5. If fibM1 > 0 and arr[offset + 1] = target, return offset + 1.
// 6. Return -1 if the target value is not found.

