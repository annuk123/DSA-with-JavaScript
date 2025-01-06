//Question 26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//solution
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    // Initialize a pointer for the position of the next unique element
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }

    return k + 1;
}

//Explanation
// Time Complexity: O(n) where n is the length of the nums array.
// Space Complexity: O(1)
// The function removeDuplicates is designed to solve the "remove duplicates from sorted array" problem. The goal is to modify the input array nums in-place such that each unique element appears only once, and the relative order of the elements is preserved. The function returns the number of unique elements in the modified array.

// 1. Edge Case Check
// if (nums.length === 0) return 0;
// If the input array nums is empty, there are no duplicates to remove, so the function returns 0.

// 2. Initialize a Pointer
// let k = 0;
// Initialize a pointer k to keep track of the position of the next unique element in the modified array. Initially, k is set to 0, representing the first element of the array.

// 3. Iterate Through the Array
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k]) {
//         k++;
//         nums[k] = nums[i];
//     }
// }
// Iterate through the array nums starting from the second element (i = 1) to compare each element with the previous unique element.

// 4. Update the Array
// if (nums[i] !== nums[k]) {
//     k++;
//     nums[k] = nums[i];
// }
// If the current element nums[i] is different from the previous unique element nums[k], increment k and update nums[k] to be the current element nums[i].

// 5. Return the Number of Unique Elements
// return k + 1;
// The function returns k + 1, where k represents the index of the last unique element in the modified array. Adding 1 gives the count of unique elements in the array.

// 6. Final Note
// The function modifies the input array nums in-place and returns the count of unique elements. The relative order of the elements is preserved, and the remaining elements after the unique elements are not important. The space complexity is O(1) since the function uses a constant amount of extra space regardless of the input size.
