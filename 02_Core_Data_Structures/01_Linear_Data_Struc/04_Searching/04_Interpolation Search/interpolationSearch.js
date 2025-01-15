// interpolation Search in JavaScript
// Interpolation search is an algorithm for searching for a target value in a sorted array by estimating the position of the target based on the range of values in the array. The time complexity of interpolation search is O(log log n) on average, where n is the number of elements in the array.

// The following is an example of an interpolation search implementation in JavaScript:

function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

// Example Usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
console.log(interpolationSearch(arr, target)); // Output: 4

// In this example, the interpolationSearch function takes a sorted array arr and a target value as input. It performs interpolation search to find the index of the target value in the array. If the target value is found, the function returns the index. If the target value is not found, the function returns -1.

// Interpolation search is an efficient search algorithm for finding a target value in a sorted array. By estimating the position of the target based on the range of values in the array, interpolation search can quickly narrow down the search range and find the target value in O(log log n) time complexity on average. This makes it a suitable choice for searching in large datasets or when the data is uniformly distributed.

// The interpolationSearch function is designed to perform interpolation search on a sorted array and return the index of the target value if found. It estimates the position of the target value based on the range of values in the array and updates the search range accordingly. The function returns the index of the target value if found, or -1 if the target value is not present in the array.

//Explaining the Code
// The interpolationSearch function takes a sorted array arr and a target value as input and returns the index of the target value in the array. If the target value is not found, the function returns -1.

// Initialize Pointers
// let low = 0;
// let high = arr.length - 1;
// Initialize two pointers, low and high, to represent the search range in the array. Initially, low is set to the first index (0) and high is set to the last index (arr.length - 1).

// Interpolation Search
// while (low <= high && target >= arr[low] && target <= arr[high]) {
//     let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
//     if (arr[pos] === target) {
//         return pos;
//     } else if (arr[pos] < target) {
//         low = pos + 1;
//     } else {
//         high = pos - 1;
//     }
// }
// Perform interpolation search within the range [low, high] to estimate the position of the target value. The loop continues until the search range is empty (low > high) or the target value is found.

// Update Pointers
// if (arr[pos] === target) {
//     return pos;
// } else if (arr[pos] < target) {
//     low = pos + 1;
// } else {
//     high = pos - 1;
// }
// If the target value is found at index pos, return pos. Otherwise, update the pointers low and high based on the comparison of arr[pos] with the target value.

// Return -1 if Target Value is Not Found
// return -1;
// If the target value is not found in the array, return -1 to indicate that the target value is not present.

// The interpolation search algorithm is an improvement over binary search for uniformly distributed datasets. By estimating the position of the target value based on the range of values in the array, interpolation search can quickly narrow down the search range and find the target value in O(log log n) time complexity on average. This makes it an efficient algorithm for searching in large datasets or when the data is uniformly distributed.

// The interpolationSearch function provides a JavaScript implementation of the interpolation search algorithm. It takes a sorted array and a target value as input and returns the index of the target value in the array if found. The function estimates the position of the target value using interpolation and updates the search range accordingly. If the target value is found, the function returns the index. If the target value is not present in the array, the function returns -1. This makes it a useful algorithm for searching in sorted datasets with uniformly distributed values.