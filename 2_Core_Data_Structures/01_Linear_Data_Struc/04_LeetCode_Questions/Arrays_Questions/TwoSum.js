// Question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


//Solution
function twoSum(nums, target) {
    // Create a map to store the complement and its index
    const complementMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (complementMap.has(complement)) {
            // Return the indices of the two numbers
            return [complementMap.get(complement), i];
        }

        // Store the current number and its index in the map
        complementMap.set(nums[i], i);
    }

    // Return an empty array if no solution is found (though the problem guarantees a solution)
    return [];
}


//Explanation
// Time Complexity: O(n) where n is the length of the nums array.

// The function twoSum is designed to solve the "two-sum" problem, where the goal is to find two indices in the array nums such that the values at these indices add up to the specified target.

//1. Initialize a Map
//const complementMap = new Map();

// A Map is used to store key-value pairs where:
// - The key is a number from the array.
// - The value is the index of that number in the array.
// The purpose of this Map is to allow quick lookups to check if a complement (the value required to reach the target) exists.

// 2. Iterate Through the Array

// for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

// Loop through each number in nums:
// At every step, calculate the complement, which is the difference between the target and the current number (nums[i]).

// For example, if target = 9 and nums[i] = 2, then the complement is 9 - 2 = 7.

// 3. Check if the Complement Exists

// if (complementMap.has(complement)) {
//     return [complementMap.get(complement), i];
// }

// Check if the complement is already in the Map:
// If it exists, it means that there is a previous number in the array that, when added to the current number, equals the target.

// Example:
// Suppose nums = [2, 7, 11, 15], target = 9.
// When i = 1 (nums[i] = 7), the complement is 2 (9 - 7 = 2).
// The Map already contains 2 with an index of 0.
// The solution is therefore [0, 1].

// 4. Update the Map
// complementMap.set(nums[i], i);
// If the complement doesn’t exist in the Map, store the current number and its index in the Map.
// Why?
// In case a future number needs this value as its complement.

// After processing nums[0] = 2, the Map will look like this:

// 5. Default Return
// return [];

// This line exists as a fallback but isn’t used in this problem because the problem guarantees there is always a solution.

// Example Execution

// nums = [2, 7, 11, 15];
// target = 9;

// Initialize the Map: complementMap = new Map().
// complementMap = {} (empty).

// Iteration 1 (i = 0):
// nums[i] = 2.
// complement = 9 - 2 = 7.
// 7 is not in the Map.
// Add 2 to the Map: complementMap = { 2 => 0 }.

// Iteration 2 (i = 1):
// nums[i] = 7.
// complement = 9 - 7 = 2.
// 2 is in the Map with index 0.

// Return [0, 1].
// Output: [0, 1].

// Why This Solution is Efficient?
// Time Complexity: O(n)
// Each element is processed once, and Map lookups (has and get) are    O(1).
// Space Complexity: O(n)
// The Map stores up to n elements in the worst case.


//Additional Information
//Key Concepts: Hash Map, Two Pointers
//Hash Map: A hash map is a data structure that stores key-value pairs. It allows for constant time lookups, insertions, and deletions. In this problem, we use a hash map to store the elements of the array as keys and their indices as values. This allows us to quickly check if a complement exists in the array.

//Two Pointers: We use two pointers to iterate through the array. The first pointer (i) iterates through the array, while the second pointer (complement) calculates the complement of the current element with respect to the target. If the complement exists in the hash map, we return the indices of the two elements that add up to the target. Otherwise, we add the current element to the hash map and continue iterating through the array.

