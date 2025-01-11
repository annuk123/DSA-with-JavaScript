// Question
// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//solution

function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val){
        nums[k] = nums[i];
        k++;

      }
    }
    return k;
}

//Explanation
// Time Complexity: O(n) where n is the length of the nums array.
// Space Complexity: O(1)
// The function removeElement is designed to solve the "remove element" problem. The goal is to modify the input array nums in-place such that all occurrences of the value val are removed, and the relative order of the elements is preserved. The function returns the number of elements in the modified array that are not equal to val.

// 1. Initialize a Pointer
// let k = 0;
// Initialize a pointer k to keep track of the position of the next element that is not equal to val in the modified array. Initially, k is set to 0.

// 2. Iterate Through the Array
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//         nums[k] = nums[i];
//         k++;
//     }
// }
// Iterate through the array nums to check each element.

// 3. Update the Array
// if (nums[i] !== val) {
//     nums[k] = nums[i];
//     k++;
// }
// If the current element nums[i] is not equal to val, update nums[k] to be the current element nums[i] and increment k.

// 4. Return the Number of Elements
// return k;
// The function returns k, which represents the count of elements in the modified array that are not equal to val.

// 5. Final Note
// The function modifies the input array nums in-place and returns the count of elements that are not equal to val. The relative order of the elements is preserved, and the remaining elements after the non-val elements are not important. The space complexity is O(1) since the function uses a constant amount of extra space regardless of the input size.
