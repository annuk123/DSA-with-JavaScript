//Date: 04/03/2025
//Level : Medium
//Title: Partition Array According to Given Pivot

// You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

// Every element less than pivot appears before every element greater than pivot.
// Every element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
// Return nums after the rearrangement.

//solution

function pivotArray(nums, pivot) {
    let smaller = [];
    let equal = [];
    let greater = [];

    // Step 1: Categorize numbers into three groups
    for (let num of nums) {
        if (num < pivot) {
            smaller.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    // Step 2: Concatenate arrays in the required order
    return [...smaller, ...equal, ...greater];
}

//Example
let nums = [4, 5, 3, 2, 1, 6, 7];
let pivot = 4;
console.log(pivotArray(nums, pivot)); //Output: [3, 2, 1, 4, 5, 6, 7]

//Time Complexity: O(n)
//Space Complexity: O(n)

//Explanation
//1. Create Three Arrays to Store Numbers
// let smaller = [];
// let equal = [];
// let greater = [];
// Create three arrays to store numbers less than pivot, equal to pivot, and greater than pivot, respectively.

//2. Categorize Numbers Based on Pivot
// for (let num of nums) {
//     if (num < pivot) {
//         smaller.push(num);

//     } else if (num === pivot) {
//         equal.push(num);
//     } else {
//         greater.push(num);
//     }
// }
// Iterate through each number in the input array nums. Categorize the numbers into the three arrays based on their relation to the pivot value.

//3. Concatenate Arrays in Required Order
// return [...smaller, ...equal, ...greater];
// Concatenate the three arrays in the required order: smaller numbers, equal numbers, and greater numbers. The resulting array satisfies the conditions specified in the problem statement.

//4. Return Rearranged Array
// return [...smaller, ...equal, ...greater];
// Return the rearranged array that satisfies the conditions specified in the problem statement.
