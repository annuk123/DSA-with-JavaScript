//Search in 2D Matrics

// Time Complexity: O(n+m)
// Space Complexity: O(1)

function searchIn2DMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
}

// Example usage:
const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17],
];
const target = 9;
console.log(searchIn2DMatrix(matrix, target)); // Output: true
console.log(searchIn2DMatrix(matrix, 15)); // Output: false

// In this example, we define a function searchIn2DMatrix that takes a 2D matrix and a target value as input and returns true if the target value is present in the matrix, and false otherwise. The function uses a two-pointer approach to search for the target value in the matrix. It starts from the top-right corner of the matrix and moves left or down based on the comparison of the current element with the target value. If the target value is found, the function returns true; otherwise, it returns false.

// The time complexity of the searchIn2DMatrix function is O(n+m), where n is the number of rows in the matrix and m is the number of columns. The space complexity is O(1) as the function uses a constant amount of extra space for variables.

// The searchIn2DMatrix function can be used to efficiently search for a target value in a 2D matrix by starting from the top-right corner and moving left or down based on the comparison of the current element with the target value. The function returns true if the target value is found in the matrix and false otherwise.

// The two-pointer approach used in the searchIn2DMatrix function allows for efficient searching in a 2D matrix by eliminating rows or columns based on the comparison of the current element with the target value. This approach reduces the search space and improves the overall efficiency of the search operation.

// Explanation of code:

// The searchIn2DMatrix function takes a 2D matrix and a target value as input and returns true if the target value is present in the matrix, and false otherwise.

// The function initializes two pointers, row and col, to the top-right corner of the matrix.

// The function then enters a while loop that continues as long as the row is less than the number of rows in the matrix and the col is greater than or equal to 0.

// Inside the loop, the function checks if the current element in the matrix at the position [row][col] is equal to the target value. If it is, the function returns true.

// If the current element is less than the target value, the function increments the row pointer to move down in the matrix.

// If the current element is greater than the target value, the function decrements the col pointer to move left in the matrix.

// If the loop completes without finding the target value, the function returns false.


