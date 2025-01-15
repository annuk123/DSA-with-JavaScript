// exponentialSearch.js

// Exponential search is a searching algorithm that finds the position of a target value within a sorted array. It is an improvement over binary search for unbounded arrays and can be used to find the position of an element in a sorted array of infinite size.

function exponentialSearch(arr, target) {
    let n = arr.length;
    if (arr[0] === target) return 0;
    
    let i = 1;
    while (i < n && arr[i] <= target) i *= 2;
    
    return binarySearch(arr, i / 2, Math.min(i, n), target);
    }

function binarySearch(arr, left, right, target) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
console.log(exponentialSearch(arr, target)); // Output: 5

// Time complexity: O(log n)
// Space complexity: O(1)
// Where n is the number of elements in the input array. 
// Exponential search has a time complexity of O(log n) and a space complexity of O(1).


//Exponential search is an efficient searching algorithm that can be used to find the position of an element in a sorted array of infinite size. It works by doubling the size of the search interval until the target value is found or the end of the array is reached. Once the search interval is determined, a binary search is performed to find the target value within that interval. Exponential search has a time complexity of O(log n) and a space complexity of O(1), making it an efficient algorithm for searching in sorted arrays. Exponential search is particularly useful for unbounded arrays where the size of the array is not known in advance.

//Explanation
// The exponential search algorithm works by first finding the range in which the target value is located. It does this by doubling the size of the search interval until the target value is found or the end of the array is reached. Once the search interval is determined, a binary search is performed to find the target value within that interval.

// The exponential search algorithm has the following steps:

// 1. Start with an index i = 1.
// 2. While i < n and arr[i] <= target, double i.
// 3. Perform a binary search on the range [i / 2, min(i, n)] to find the target value.
// 4. Return the index of the target value if found, or -1 if not found.

// The exponential search algorithm has a time complexity of O(log n) and a space complexity of O(1), making it an efficient algorithm for searching in sorted arrays. It is particularly useful for unbounded arrays where the size of the array is not known in advance. Exponential search is an improvement over binary search for unbounded arrays and can be used to find the position of an element in a sorted array of infinite size.

