// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    for(let i=0;i<s.length;i++){

        if(left<right){
            let temp = s[right];
            s[right] = s[left];
            s[left] = temp;
        }
        left++;
        right--;
    }
}

// Example usage:
const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // Output: ["o", "l", "l", "e", "h"]