//A multi-dimensional array in JavaScript
//A multi-dimensional array in JavaScript is an array of arrays. It’s used to represent more complex data structures such as matrices or grids. The most common type is a two-dimensional array, but you can also have three-dimensional or higher-dimensional arrays.

//Basics of Multi-Dimensional Arrays
// 1. Two-Dimensional Arrays
// A two-dimensional array is essentially an array of arrays, where each sub-array represents a row of a grid or matrix. You can access elements in a two-dimensional array using two indices.

// Creating a two-dimensional array (3x3 matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Accessing elements
  console.log(matrix[0][0]); // 1 (first element in the first row)
  console.log(matrix[1][2]); // 6 (third element in the second row)
  
  // Iterating over a two-dimensional array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]); // prints all elements in the matrix
    }
  }
  
    // 2. Three-Dimensional Arrays
// A three-dimensional array is an array of arrays of arrays, where each sub-array represents a two-dimensional array. You can access elements in a three-dimensional array using three indices.
//A three-dimensional array can be thought of as an array of two-dimensional arrays. This could be used to represent more complex structures like a 3D grid.

//Example:

// Creating a three-dimensional array (2x2x2 cube)
const cube = [
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ]
  ];
  
  // Accessing elements
  console.log(cube[0][0][0]); // 1 (first element of the first 2D array)
  console.log(cube[1][1][1]); // 8 (last element of the last 2D array)
  
  // Iterating over a three-dimensional array
  for (let i = 0; i < cube.length; i++) {
    for (let j = 0; j < cube[i].length; j++) {
      for (let k = 0; k < cube[i][j].length; k++) {
        console.log(cube[i][j][k]); // prints all elements in the cube
      }
    }
  }

  // 3. Higher-Dimensional Arrays
// You can create arrays with more than three dimensions by nesting arrays within arrays. However, higher-dimensional arrays are less common and can be more difficult to work with.

//Example:

// Creating a four-dimensional array (2x2x2x2)

const hypercube = [
    [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [5, 6],
        [7, 8]
      ]
    ],
    [
      [
        [9, 10],
        [11, 12]
      ],
      [
        [13, 14],
        [15, 16]
      ]
    ]
  ];
  
  // Accessing elements
  console.log(hypercube[0][0][0][0]); // 1 (first element of the first 3D array)
  console.log(hypercube[1][1][1][1]); // 16 (last element of the last 3D array)
  
  // Iterating over a four-dimensional array
  for (let i = 0; i < hypercube.length; i++) {
    for (let j = 0; j < hypercube[i].length; j++) {
      for (let k = 0; k < hypercube[i][j].length; k++) {
        for (let l = 0; l < hypercube[i][j][k].length; l++) {
          console.log(hypercube[i][j][k][l]); // prints all elements in the hypercube
        }
      }
    }
  }
  
  //Summary
// A multi-dimensional array in JavaScript is an array of arrays, where each sub-array represents a row of a grid or matrix.
// You can create two-dimensional, three-dimensional, or higher-dimensional arrays by nesting arrays within arrays.
// You can access elements in a multi-dimensional array using multiple indices, one for each dimension.
// Iterating over a multi-dimensional array requires nested loops to traverse each dimension of the array.
// Higher-dimensional arrays are less common and can be more challenging to work with due to increased complexity.
// Multi-dimensional arrays are useful for representing complex data structures like matrices, grids, or cubes.
// JavaScript does not have built-in support for multi-dimensional arrays, but you can create them using nested arrays and loops.




//Use Cases
// Multi-dimensional arrays are useful in a variety of applications where data is organized in a grid-like structure. Some common use cases include:
// Matrices:
// Multi-dimensional arrays are commonly used to represent matrices in mathematical computations, game boards, or image pixel data.

// Cubes: 
// Three-dimensional arrays can be used to represent 3D grids or cubes in applications like 3D graphics, simulations, or scientific modeling.

// Grids:
// Useful in applications like spreadsheets, game maps, or any system that involves grid-based layouts.

// Multi-Level Data Structures:
// They help in organizing complex data, such as nested structures in data analysis or simulations.




//Operations
// 1. Accessing Elements:
// To access an element in a multi-dimensional array, you use multiple indices corresponding to the dimensions of the array.
// For example, to access the element at row i and column j in a two-dimensional array matrix, you would use matrix[i][j].
// Similarly, for a three-dimensional array cube, you would use cube[i][j][k] to access the element at position (i, j, k).

// let value = matrix[rowIndex][columnIndex];


//2. Modifying Elements:
// To modify an element, you simply assign a new value using the indices.
// matrix[0][0] = 10; // Sets the first element in the first row to 10


// 3. Iterating Over Elements:
// You use nested loops to iterate through the elements of multi-dimensional arrays.
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        // Access matrix[i][j]
      }
    }
    

    // 4. Creating Multi-Dimensional Arrays:
// You can create multi-dimensional arrays by nesting arrays within arrays.
// For example, a two-dimensional array can be created as follows:
const matrixs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // 5. Copying Multi-Dimensional Arrays:
// To create a copy of a multi-dimensional array, you need to copy each sub-array individually.
// You can use the map() method to copy a two-dimensional array:
const copy = matrix.map(row => [...row]);
// For higher-dimensional arrays, you would need to nest the map() calls accordingly.

// 6. Flattening Multi-Dimensional Arrays:
// To flatten a multi-dimensional array into a one-dimensional array, you can use the flat() method.
const flattened = matrix.flat();
// This will flatten the two-dimensional array matrix into a one-dimensional array.

// 7. Checking if an Array is Multi-Dimensional:
// You can check if an array is multi-dimensional by checking if its elements are arrays.
// For example, to check if matrix is a two-dimensional array:
const isMultiDimensional = matrix.every(Array.isArray);
// This will return true if all elements of matrix are arrays, indicating that it is a two-dimensional array.


// 8. Converting Multi-Dimensional Arrays to Strings:
// To convert a multi-dimensional array to a string, you can use the JSON.stringify() method.
const jsonString = JSON.stringify(matrix);
// This will convert the two-dimensional array matrix to a JSON string.

// 9. Converting Strings to Multi-Dimensional Arrays:
// To convert a string back to a multi-dimensional array, you can use the JSON.parse() method.
const parsedArray = JSON.parse(jsonString);
// This will convert the JSON string jsonString back to a two-dimensional array.


// 10. Filtering Multi-Dimensional Arrays:
// You can filter multi-dimensional arrays using the filter() method.
// For example, to filter a two-dimensional array matrix based on a condition:
const filtered = matrix.filter(row => row.includes(5));
// This will return a new array containing only the rows that include the value 5.

// 11. Mapping Multi-Dimensional Arrays:
// You can map over multi-dimensional arrays using the map() method.
// For example, to double each element in a two-dimensional array matrix:
const doubled = matrix.map(row => row.map(value => value * 2));
// This will return a new two-dimensional array with each element doubled.

// 12. Reducing Multi-Dimensional Arrays:
// You can reduce multi-dimensional arrays using the reduce() method.
// For example, to sum all elements in a two-dimensional array matrix:
const sum = matrix.reduce((acc, row) => acc + row.reduce((acc, value) => acc + value, 0), 0);
// This will return the sum of all elements in the matrix.

// 13. Sorting Multi-Dimensional Arrays:
// You can sort multi-dimensional arrays using the sort() method.
// For example, to sort a two-dimensional array matrix based on the sum of each row:
matrix.sort((a, b) => a.reduce((acc, value) => acc + value, 0) - b.reduce((acc, value) => acc + value, 0));

// 14. Searching Multi-Dimensional Arrays:
// You can search multi-dimensional arrays using methods like find(), findIndex(), or includes().
// For example, to find the first row that includes the value 5 in a two-dimensional array matrix:
const row = matrix.find(row => row.includes(5));
// This will return the first row that includes the value 5.

// 15. Concatenating Multi-Dimensional Arrays:
// You can concatenate multi-dimensional arrays using the concat() method.
// For example, to concatenate two two-dimensional arrays matrix1 and matrix2:
const concatenated = matrix1.concat(matrix2);

// 16. Joining Multi-Dimensional Arrays:
// You can join multi-dimensional arrays into a string using the join() method.
// For example, to join a two-dimensional array matrix with a custom separator:
const joined = matrix.map(row => row.join(',')).join(';');
// This will join each row with a comma and separate rows with a semicolon.

// 17. Slicing Multi-Dimensional Arrays:
// You can slice multi-dimensional arrays using the slice() method.
// For example, to extract a subarray from a two-dimensional array matrix:
const subarray = matrix.slice(1, 3);
// This will extract rows 1 and 2 from the matrix.

// 18. Spreading Multi-Dimensional Arrays:
// You can spread multi-dimensional arrays using the spread operator.
// For example, to concatenate two two-dimensional arrays matrix1 and matrix2:
const concatenateds = [...matrix1, ...matrix2];
// This will concatenate the two arrays into a new array.



