// Difficulty: Easy
// Date: 2021-02-23
// Question: Search Insert Position
//Question #35
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.


//Solution


function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}

//Time Complexity: O(log n)
//Space Complexity: O(1)

//The function searchInsert is designed to solve the "search insert position" problem. The goal is to find the index where the target value should be inserted into a sorted array of distinct integers. If the target value is found in the array, the function returns the index of the target. Otherwise, it returns the index where the target would be inserted to maintain the sorted order.

//1. Initialize Pointers
//let left = 0;
//let right = nums.length - 1;
//Initialize two pointers, left and right, to represent the range of the array where the target value could be inserted. Initially, left is set to 0 and right is set to the last index of the array.

//2. Binary Search
//while (left <= right) {
//    let mid = Math.floor((left + right) / 2);
//    if (nums[mid] === target) {
//        return mid;
//    } else if (nums[mid] < target) {
//        left = mid + 1;
//    } else {
//        right = mid - 1;
//    }
//}
//Perform binary search within the range [left, right] to find the target value or the position where it should be inserted.

//3. Update Pointers
//if (nums[mid] === target) {
//    return mid;
//} else if (nums[mid] < target) {
//    left = mid + 1;
//} else {
//    right = mid - 1;
//}
//If the target value is found at index mid, return mid. Otherwise, update the pointers left and right based on the comparison of nums[mid] with the target value.

//4. Return Insertion Position
//return left;
//If the target value is not found in the array, return the left pointer as the index where the target would be inserted to maintain the sorted order.

//5. Final Note
//The function uses binary search to find the insertion position of the target value in the sorted array. It has a time complexity of O(log n) and a space complexity of O(1), making it an efficient solution for the problem. The function assumes that the input array is sorted and contains
//distinct integers. If the array may contain duplicates, additional checks may be needed to handle such cases.

