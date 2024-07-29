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
  

