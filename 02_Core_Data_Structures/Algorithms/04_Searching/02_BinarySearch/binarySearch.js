//Binary Search in JavaScript

//Binary search is a search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array and continues narrowing down the search range until the target value is found or the search range is empty. The time complexity of binary search is O(log n), where n is the number of elements in the array.

//The following is an example of a binary search implementation in JavaScript:

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

//Example Usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
console.log(binarySearch(arr, target)); // Output: 4
//In this example, the binarySearch function takes a sorted array arr and a target value as input. It performs binary search to find the index of the target value in the array. If the target value is found, the function returns the index. If the target value is not found, the function returns -1.

//Binary search is an efficient search algorithm for finding a target value in a sorted array. By comparing the target value to the middle element of the array and narrowing down the search range based on the comparison, binary search can quickly find the target value in O(log n) time complexity. This makes it a preferred choice for searching in large datasets or when the data is sorted.

//The binarySearch function is designed to perform binary search on a sorted array and return the index of the target value if found. It uses two pointers, left and right, to represent the search range and iteratively updates the pointers based on the comparison of the middle element with the target value. The function returns the index of the target value if found, or -1 if the target value is not present in the array.

//Explaining the Code
//The binarySearch function takes a sorted array arr and a target value as input and returns the index of the target value in the array. If the target value is not found, the function returns -1.

//1. Initialize Pointers
//let left = 0;
//let right = arr.length - 1;
//Initialize two pointers, left and right, to represent the search range in the array. Initially, left is set to the first index (0) and right is set to the last index (arr.length - 1).

//2. Binary Search
//while (left <= right) {
//    let mid = Math.floor((left + right) / 2);
//    if (arr[mid] === target) {
//        return mid;
//    } else if (arr[mid] < target) {
//        left = mid + 1;
//    } else {
//        right = mid - 1;
//    }
//}
//Perform binary search within the range [left, right] to find the target value or determine that it is not present in the array. The loop continues until the search range is empty (left > right).

//3. Update Pointers
//if (arr[mid] === target) {
//    return mid;
//} else if (arr[mid] < target) {
//    left = mid + 1;
//} else {
//    right = mid - 1;
//}
//If the target value is found at index mid, return mid. Otherwise, update the pointers left and right based on the comparison of arr[mid] with the target value.

//4. Return -1 if Target Value is Not Found
//return -1;
//If the function completes the loop without finding the target value, return -1 to indicate that the target value is not present in the array.

//5. Example Usage
//const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
//const target = 9;
//console.log(binarySearch(arr, target)); // Output: 4
//In this example, the binarySearch function is called with a sorted array arr and a target value of 9. The function performs binary search on the array and returns the index of the target value, which is 4 in this case.

//Binary search is a powerful search algorithm that efficiently finds the position of a target value in a sorted array. By dividing the search range in half at each step, binary search can quickly locate the target value in O(log n) time complexity, making it a preferred choice for searching in large datasets or when the data is sorted. The binarySearch function provides a simple and effective implementation of binary search in JavaScript, allowing for fast and reliable search operations on sorted arrays.