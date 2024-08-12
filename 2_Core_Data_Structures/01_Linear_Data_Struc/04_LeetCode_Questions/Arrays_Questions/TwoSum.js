// Question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
    let map = new Map(); // Create a hash map
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    // Return an empty array if no solution is found (though the problem guarantees one solution)
    return [];
}

// Time Complexity: O(n)
//Key Concepts: Hash Map, Two Pointers

//Hash Map: A hash map is a data structure that stores key-value pairs. It allows for constant time lookups, insertions, and deletions. In this problem, we use a hash map to store the elements of the array as keys and their indices as values. This allows us to quickly check if a complement exists in the array.

//Two Pointers: We use two pointers to iterate through the array. The first pointer (i) iterates through the array, while the second pointer (complement) calculates the complement of the current element with respect to the target. If the complement exists in the hash map, we return the indices of the two elements that add up to the target. Otherwise, we add the current element to the hash map and continue iterating through the array.

