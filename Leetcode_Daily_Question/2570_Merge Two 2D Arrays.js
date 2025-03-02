//You are given two 2D integer arrays nums1 and nums2.

// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.


function mergeArrays(nums1, nums2){
    let map = new Map();

    //process nums1

    for(let [id, val] of nums1){
        map.set(id, (map.get(id) || 0) + val);
    }

    //process nums2
    for(let [id, val] of nums2){
        map.set(id, (map.get(id) || 0) + val);
    }

    //Convert map to sorted array
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}

//Explanation of the code

//1. Create a Map to Store Ids and Values
//let map = new Map();  
//Create a Map object to store the ids and values from the two input arrays.

//2. Process nums1 Array
//for (let [id, val] of nums1) {
//    map.set(id, (map.get(id) || 0) + val);
//}
//Iterate through each element in the nums1 array using a for...of loop. For each element, extract the id and value using destructuring assignment. Use the Map.set() method to add the id and value to the map, summing up the values if the id already exists in the map.

//3. Process nums2 Array
//for (let [id, val] of nums2) {
//    map.set(id, (map.get(id) || 0) + val);
//}
//Repeat the same process for the nums2 array, adding the ids and values to the map and summing up the values if the id already exists.

//4. Convert Map to Sorted Array
//return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
//Convert the map entries to an array using Array.from() and sort the array in ascending order based on the id values. The resulting array contains the merged ids and values from both input arrays, sorted by id.

