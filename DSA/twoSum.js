// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//brute force approach= o(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

//hashmap approach= o(n)
function twoSumMap(nums, target) {
    const numMap = new Map();
    for(let i=0;i<nums.length;i++){
        numMap.set(nums[i],i);
    }
    for(let i=0;i<nums.length;i++){
        let complement=target-nums[i];
        if(numMap.has(complement) && numMap.get(complement)!==i){
            return [i,numMap.get(complement)];
        }
    }
    return [];
}


// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 
console.log(twoSumMap(nums, target)); 