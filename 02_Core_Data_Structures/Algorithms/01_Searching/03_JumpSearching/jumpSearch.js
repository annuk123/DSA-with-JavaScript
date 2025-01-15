//Jump Search in JavaScript
//Jump search is an algorithm that searches for a target value in a sorted array by jumping ahead by fixed steps or blocks until the target value is found or the end of the array is reached. The time complexity of jump search is O(√n), where n is the number of elements in the array.

//The following is an example of a jump search implementation in JavaScript:

function jumpSearch(arr, target) {
    const n = arr.length;
    const blockSize = Math.floor(Math.sqrt(n));
    let start = 0;
    let end = blockSize;

    while (end < n && arr[end] < target) {
        start = end;
        end += blockSize;
    }

    for (let i = start; i <= Math.min(end, n - 1); i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

//Example Usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
console.log(jumpSearch(arr, target)); // Output: 4
// In this example, the jumpSearch function takes a sorted array arr and a target value as input. It performs jump search to find the index of the target value in the array. If the target value is found, the function returns the index. If the target value is not found, the function returns -1.

// Jump search is an efficient search algorithm for finding a target value in a sorted array. By jumping ahead by fixed steps or blocks, jump search can quickly narrow down the search range and find the target value in O(√n) time complexity. This makes it a suitable choice for searching in large datasets or when the data is sorted.

// The jumpSearch function is designed to perform jump search on a sorted array and return the index of the target value if found. It divides the array into blocks of fixed size (blockSize) and jumps ahead by blockSize steps until the target value is found or the end of the array is reached. The function then performs a linear search within the block to find the target value.

// Explaining the Code
// The jumpSearch function takes a sorted array arr and a target value as input and returns the index of the target value in the array. If the target value is not found, the function returns -1.

// 1. Initialize Variables
// const n = arr.length;
// const blockSize = Math.floor(Math.sqrt(n));
// let start = 0;
// let end = blockSize;
// Initialize variables n (number of elements in the array), blockSize (size of each block), start (start index of the block), and end (end index of the block).

// 2. Jump
// while (end < n && arr[end] < target) {
//     start = end;
//     end += blockSize;
// }
// Jump ahead by blockSize steps until the end of the array is reached or the target value is found. Update the start and end indices accordingly.

// 3. Linear Search
// for (let i = start; i <= Math.min(end, n - 1); i++) {
//     if (arr[i] === target) {
//         return i;
//     }
// }
// Perform linear search within the block to find the target value. Iterate through the elements from start to the minimum of end and n - 1.

// 4. Return -1 if Target Value is Not Found
// return -1;
// If the target value is not found in the array, return -1 to indicate that the target value is not present.

// 5. Example Usage
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// const target = 9;
// console.log(jumpSearch(arr, target)); // Output: 4
// In this example, the jumpSearch function is called with a sorted array arr and a target value of 9. The function performs jump search to find the index of the target value in the array, which is 4 in this case.

// Jump search is an efficient search algorithm that combines the advantages of linear search and binary search. By jumping ahead by fixed steps, jump search can quickly narrow down the search range and find the target value in O(√n) time complexity, where n is the number of elements in the array. This makes it a suitable choice for searching in large datasets or when the data is sorted.
