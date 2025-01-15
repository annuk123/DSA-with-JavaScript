//Linear Search in JavaScript
//Linear search is a simple search algorithm that sequentially checks each element in a list until a match is found or the whole list has been searched. The time complexity of linear search is O(n), where n is the number of elements in the list.

//The following is an example of a linear search implementation in JavaScript:

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

//Example Usage:
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const target = 5;
console.log(linearSearch(arr, target)); // Output: 4
//In this example, the linearSearch function takes an array arr and a target value as input. It iterates through each element in the array and checks if the element is equal to the target value. If a match is found, the function returns the index of the element. If no match is found, the function returns -1.

//The linear search algorithm is straightforward and easy to implement, but it is not the most efficient for large datasets. For larger datasets, more efficient search algorithms like binary search or hash tables are preferred. However, linear search can be useful for small datasets or when the data is not sorted.

//Linear search is commonly used in scenarios where the data is unsorted or when the dataset is small. It is a simple and intuitive algorithm that can be implemented quickly in various programming languages, including JavaScript.

//Explaining the Code
//The linearSearch function takes an array arr and a target value as input and returns the index of the target value in the array. If the target value is not found, the function returns -1.

//1. Iterate Through the Array
//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === target) {
//        return i;
//    }
//}
//The function iterates through each element in the array using a for loop. For each element, it checks if the element is equal to the target value. If a match is found, the function returns the index of the element.

//2. Return -1 if Target Value is Not Found
//return -1;
//If the function completes the loop without finding a match, it returns -1 to indicate that the target value is not present in the array.

//3. Example Usage
//const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
//const target = 5;
//console.log(linearSearch(arr, target)); // Output: 4
//In this example, the linearSearch function is called with an array arr and a target value of 5. The function returns the index of the first occurrence of the target value in the array, which is 4 in this case.

//The linear search algorithm is a basic search algorithm that is easy to understand and implement. While it may not be the most efficient for large datasets, it can be useful in certain scenarios, especially when the data is unsorted or when the dataset is small. By iterating through each element in the array sequentially, linear search can find the target value in O(n) time complexity, where n is the number of elements in the array. This makes it a simple and effective algorithm for searching in small or unsorted datasets.