// ### Arrays in JavaScript

// An array is a collection of elements that can be accessed by index. In JavaScript, arrays are dynamic, meaning they can grow and shrink in size, and they can hold any type of data (numbers, strings, objects, etc.).

// Creating Arrays

// You can create an array using the `Array` constructor or array literal notation:

// Using array literal
let fruits = ['apple', 'banana', 'cherry'];

// Using Array constructor
let number1 = new Array(1, 2, 3, 4, 5);


// Accessing Elements

// You can access elements in an array using their index:

console.log(fruits[0]); // Output: apple
console.log(number1[2]); // Output: 3


// Basic Operations

// 1. Adding Elements

//    push: Adds one or more elements to the end of an array.
//    unshift: Adds one or more elements to the beginning of an array.

   fruits.push('orange');
   console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange']

   fruits.unshift('mango');
   console.log(fruits); // Output: ['mango', 'apple', 'banana', 'cherry', 'orange']
   

// 2. Removing Elements

//    pop: Removes the last element from an array.
//    shift: Removes the first element from an array.


   fruits.pop();
   console.log(fruits); // Output: ['mango', 'apple', 'banana', 'cherry']

   fruits.shift();
   console.log(fruits); // Output: ['apple', 'banana', 'cherry']
   

// 3. Finding Elements

//    indexOf: Returns the first index at which a given element can be found.
//    includes: Determines whether an array includes a certain element.

   console.log(fruits.indexOf('banana')); // Output: 1
   console.log(fruits.includes('cherry')); // Output: true
   

// 4. Removing Elements by Index

//    splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.


   // Remove 1 element at index 1
   fruits.splice(1, 1);
   console.log(fruits); // Output: ['apple', 'cherry']
   

// 5. Iterating Over Elements

//    for loop: Traditional way to iterate over array elements.
//    forEach method: Calls a function for each element in the array.

   // Using for loop
   for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
   }

   // Using forEach method
   fruits.forEach(fruit => console.log(fruit));
   

// Advanced Array Methods

// 1. map: Creates a new array populated with the results of calling a provided function on every element in the array.

   let numbers = [1, 2, 3, 4, 5];
   let squared = numbers.map(num => num * num);
   console.log(squared); // Output: [1, 4, 9, 16, 25]


// 2. filter: Creates a new array with all elements that pass the test implemented by the provided function.

   let evenNumbers = numbers.filter(num => num % 2 === 0);
   console.log(evenNumbers); // Output: [2, 4]


// 3.reduce: Executes a reducer function on each element of the array, resulting in a single output value.

   let sum = numbers.reduce((acc, num) => acc + num, 0);
   console.log(sum); // Output: 15
   

// 4. sort: Sorts the elements of an array in place and returns the sorted array.

   let unsortedArray = [3, 1, 4, 1, 5, 9];
   unsortedArray.sort((a, b) => a - b);
   console.log(unsortedArray); // Output: [1, 1, 3, 4, 5, 9]
   

// 5.slice: Returns a shallow copy of a portion of an array into a new array object.

   let slicedArray = fruits.slice(1, 3);
   console.log(slicedArray); // Output: ['banana', 'cherry']
   

// Examples and Practice

// Here are some examples and practice problems to solidify your understanding:

// 1. Reversing an Array
   
   let arr = [1, 2, 3, 4, 5];
   let reversed = arr.reverse();
   console.log(reversed); // Output: [5, 4, 3, 2, 1]
   

// 2. Finding the Maximum Element in an Array

   let max = Math.max(...numbers);
   console.log(max); // Output: 5
   

// 3. Removing Duplicates from an Array

   let duplicates = [1, 2, 2, 3, 4, 4, 5];
   let unique = [...new Set(duplicates)];
   console.log(unique); // Output: [1, 2, 3, 4, 5]
   