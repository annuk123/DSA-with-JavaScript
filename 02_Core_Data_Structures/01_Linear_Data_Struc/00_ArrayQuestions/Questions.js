//Array Qustions

//Basic Questions
// 1. Write a function that takes an array of numbers and returns the sum of all the numbers

function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

// Time Complexity: O(n)
// Key Concepts: Iteration, Accumulator Pattern

// Iteration: We iterate through the array using a for loop, adding each element to the sum variable.
// Accumulator Pattern: We use the accumulator pattern to calculate the sum of the array. The sum variable is initialized to 0 and then incremented by each element in the array.

// 2. Write a function that takes an array of numbers and returns the average of all the numbers

function averageArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum / arr.length;
}

// Time Complexity: O(n)


// 3. Write a function that takes an array of numbers and returns the largest number in the array

function maxArray(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// Time Complexity: O(n)


// 4. Write a function that takes an array of numbers and returns the smallest number in the array

function minArray(arr) {
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return min;
}

// Time Complexity: O(n)


// 5. Write a function that takes an array of numbers and returns the number of even numbers in the array

function countEvenNumbers(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    
    return count;
}

// Time Complexity: O(n)


// 6. Write a function that takes an array of numbers and returns the number of odd numbers in the array

function countOddNumbers(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    
    return count;
}

// Time Complexity: O(n)


// 7. Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array

function filterEvenNumbers(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 8. Write a function that takes an array of numbers and returns a new array with only the odd numbers from the original array

function filterOddNumbers(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 9. Write a function that takes an array of numbers and returns a new array with only the positive numbers from the original array

function filterPositiveNumbers(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 10. Write a function that takes an array of numbers and returns a new array with only the negative numbers from the original array

function filterNegativeNumbers(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 11. Write a function that takes an array of numbers and returns a new array with only the numbers that are greater than a given number

function filterNumbersGreaterThan(arr, num) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 12. Write a function that takes an array of numbers and returns a new array with only the numbers that are less than a given number

function filterNumbersLessThan(arr, num) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 13. Write a function that takes an array of numbers and returns a new array with only the numbers that are equal to a given number


function filterNumbersEqualTo(arr, num) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 14. Write a function that takes an array of numbers and returns a new array with only the numbers that are not equal to a given number


function filterNumbersNotEqualTo(arr, num) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)


// 15. Write a function that takes an array of numbers and returns a new array with only the numbers that are divisible by a given number


function filterNumbersDivisibleBy(arr, num) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % num === 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Time Complexity: O(n)

//16. How do you remove duplicates from an array?

function removeDuplicates(arr) {
    let unique = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    
    return unique;
}

// Time Complexity: O(n^2)

//17. How do you find the missing number in a given integer array of 1 to 100?


function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    
    return total - sum;
}

// Time Complexity: O(n)

//18. How do you find the largest and smallest number in an unsorted integer array?

function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        } else if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return [largest, smallest];
}

// Time Complexity: O(n)

//19. How do you find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, sum) {
    let pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    
    return pairs;
}

// Time Complexity: O(n^2)

//20. How do you reverse an array?

function reverseArray(arr) {
    let reversed = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    
    return reversed;
}

// Time Complexity: O(n)

//21. How do you find the index of a specific element in an array?

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    
    return -1;
}

// Time Complexity: O(n)


//second method
// Use the indexOf method to find the index of a specific element.
const fruits = ['apple', 'banana', 'cherry'];
const index = fruits.indexOf('banana');
console.log(index); // Output: 1



//22. How do you find the common elements between two arrays?

function findCommonElements(arr1, arr2) {
    let common = [];
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
            common.push(arr1[i]);
        }
    }
    
    return common;
}

// Time Complexity: O(n^2)

//Intermidiate Questions

//1. How do you merge two arrays?
//You can use the concat method or the spread operator to merge arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2); // or [...array1, ...array2]
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//second method
// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// Time Complexity: O(n)


//2. How do you flatten a multi-dimensional array?
//You can use the flat method to flatten a multi-dimensional array.
const multiDimensionalArray = [1, [2, [3, [4]]]];
const flattened = multiDimensionalArray.flat(2);
console.log(flattened); // Output: [1, 2, 3, [4]]

//second method
// function flattenArray(arr) {
//     return arr.reduce((acc, curr) => acc.concat(curr), []);
// }

// Time Complexity: O(n^2)

//3. How do you remove the first and last element from an array?
//You can use the slice method to remove the first and last element from an array.
//You can also use the shift method to remove the first element and the pop method to remove the last element.

const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // Removes the first element
numbers.pop();   // Removes the last element
console.log(numbers); // Output: [2, 3, 4]

//second method
// function removeFirstAndLast(arr) {
//     return arr.slice(1, arr.length - 1);
// }


//4. How do you swap two numbers without using a temporary variable?
//You can swap two numbers without using a temporary variable by using addition and subtraction.

let a = 5;
let b = 10;
a = a + b; // a = 15, b = 10
b = a - b; // a = 15, b = 5
a = a - b; // a = 10, b = 5
console.log(a, b); // Output: 10 5


//second method
// function swapNumbers(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;
    
//     return [a, b];
// }


//5. How do you find the second largest element in an array?

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    
    return secondLargest;
}

// Time Complexity: O(n)

//6. How do you find the first non-repeated character in a string?

function findFirstNonRepeatedCharacter(str) {
    let charCount = {};
    
    for (let char of str) {
        charCount[char] = charCount[char] + 1 || 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

// Time Complexity: O(n)

//7. How do you check if two strings are anagrams of each other?

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    let charCount1 = {};
    let charCount2 = {};
    
    for (let char of str1) {
        charCount1[char] = charCount1[char] + 1 || 1;
    }
    
    for (let char of str2) {
        charCount2[char] = charCount2[char] + 1 || 1;
    }
    
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }
    
    return true;
}

// Time Complexity: O(n)


//8. How do you reverse a string?

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Time Complexity: O(n)

//9. How do you check if a string contains only digits?

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

// Time Complexity: O(n)


//10. How do you find all permutations of a string?

function findPermutations(str) {
    if (str.length === 0) {
        return [''];
    }
    
    let permutations = [];
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let innerPermutations = findPermutations(remainingChars);
        
        for (let perm of innerPermutations) {
            permutations.push(char + perm);
        }
    }
    
    return permutations;
}

// Time Complexity: O(n!)

//11. How do you check if a string is a palindrome?

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Time Complexity: O(n)

//12. How do you find the length of the longest substring without repeating characters?

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    
    return longest;
}

// Time Complexity: O(n)


//13. How do you find the missing number in a given integer array of 1 to 100?

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    
    return total - sum;
}

// Time Complexity: O(n)

//14.  How do you find the sum of all elements in an array?

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Time Complexity: O(n)

//15. How do you find duplicate numbers in an array if it contains multiple duplicates?

function findDuplicateNumbers(arr) {
    let duplicates = [];
    let seen = {};
    
    for (let num of arr) {
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    }
    
    return duplicates;
}

// Time Complexity: O(n)


//16. How do you find the largest and smallest number in an unsorted integer array?

function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        } else if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return [largest, smallest];
}

// Time Complexity: O(n)

//17. How do you find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, sum) {
    let pairs = [];
    let seen = {};
    
    for (let num of arr) {
        let target = sum - num;
        
        if (seen[target]) {
            pairs.push([num, target]);
        } else {
            seen[num] = true;
        }
    }
    
    return pairs;
}

// Time Complexity: O(n)


//Advanced Questions

//1. How do you find the intersection of two arrays?


function findIntersection(arr1, arr2) {
    let intersection = [];
    let seen = {};
    
    for (let num of arr1) {
        seen[num] = true;
    }
    
    for (let num of arr2) {
        if (seen[num]) {
            intersection.push(num);
        }
    }
    
    return intersection;
}

// Time Complexity: O(n)

//2. How do you find the first missing positive integer in an unsorted integer array?



function findFirstMissingPositive(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
}


// Time Complexity: O(n)


//3. How do you implement a function to rotate an array?

function rotateArray(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Time Complexity: O(n)


//4. How do you implement a function to shuffle an array?

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
}


// Time Complexity: O(n)

//5. How do you find the kth largest element in an unsorted integer array?

function findKthLargest(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let pivotIndex = partition(arr, left, right);
        
        if (pivotIndex === k - 1) {
            return arr[pivotIndex];
        } else if (pivotIndex < k - 1) {
            left = pivotIndex + 1;
        } else {
            right = pivotIndex - 1;
        }
    }
    
    return null;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
        if (arr[j] > pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    
    [arr[i], arr[right]] = [arr[right], arr[i]];
    
    return i;
}

// Time Complexity: O(n)

//6. How do you implement a stack using an array?

class Stack {
    constructor() {
        this.stack = [];
    }
    
    push(value) {
        this.stack.push(value);
    }
    
    pop() {
        return this.stack.pop();
    }
    
    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
}

// Time Complexity: O(1)

//7. How do you implement a queue using an array?

class Queue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(value) {
        this.queue.push(value);
    }
    
    dequeue() {
        return this.queue.shift();
    }
    
    peek() {
        return this.queue[0];
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Time Complexity: O(1)


//8. How do you implement a priority queue using an array?

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(value, priority) {
        this.queue.push({ value, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }
    
    dequeue() {
        return this.queue.shift().value;
    }
    
    peek() {
        return this.queue[0].value;
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Time Complexity: O(n log n)

//9. How do you find the median of two sorted arrays?

function findMedianSortedArrays(nums1, nums2) {
    let merged = mergeSortedArrays(nums1, nums2);
    let n = merged.length;
    
    if (n % 2 === 0) {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
}

function mergeSortedArrays(nums1, nums2) {
    let merged = [];
    let i = 0;
    let j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }
    
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }
    
    return merged;
}

// Time Complexity: O(n)

//10. How do you implement a binary search algorithm?

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

// Time Complexity: O(log n)

//11. How do you implement a bubble sort algorithm?

function bubbleSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}

// Time Complexity: O(n^2)

//12. How do you implement a selection sort algorithm?

function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
    return arr;
}

// Time Complexity: O(n^2)

//13. How do you implement an insertion sort algorithm?

function insertionSort(arr) { 
    let n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    return arr;
}

// Time Complexity: O(n^2)
    



