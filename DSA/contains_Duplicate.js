// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.


//simple approach:

function containsDuplicate(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){ // Check if the current element is equal to the next element
            return true; // If a duplicate is found, return true
        }
    }
    return false; // If no duplicates are found, return false
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false

// using set:

function containsDuplicateUsingSet(nums) {
    const numSet = new Set(nums); // Create a Set from the array, which removes duplicates
    if(nums.length == numSet.size){ // Compare the length of the original array with the size of the Set
        return false; // If they are equal, there are no duplicates
    }
    return true; // If they are not equal, there are duplicates
}

// Example usage:
console.log(containsDuplicateUsingSet([1, 2, 3, 1])); // Output: true
console.log(containsDuplicateUsingSet([1, 2, 3, 4])); // Output: false

