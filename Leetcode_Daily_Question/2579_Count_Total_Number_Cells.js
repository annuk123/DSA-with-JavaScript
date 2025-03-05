//Date: 06/03/2025
//Level: Medium
//Title: 2579. Count Total Number of Colored Cells

//Question:
// There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:

// At the first minute, color any arbitrary unit cell blue.
// Every minute thereafter, color blue every uncolored cell that touches a blue cell.
// Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.

// Return the number of colored cells at the end of n minutes.


//Solution:
function coloredCells(n) {
    return 2 * n * (n - 1) + 1;
}

//Time Complexity: O(1)
//Space Complexity: O(1)

//Test Cases
console.log(coloredCells(1)); //1
console.log(coloredCells(2)); //5
console.log(coloredCells(3)); //13
console.log(coloredCells(4)); //25

//Explanation:
//At minute 1, we color 1 cell
//At minute 2, we color 4 cells
//At minute 3, we color 8 cells
//At minute 4, we color 12 cells
//At minute 5, we color 16 cells