// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

//hashmap approach:
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    const strMap = new Map();

    for (let values of s){
        strMap.set(values,(strMap.get(values) || 0 )+1);
    }

    for (let values of t){
        if(!strMap.get(values)){
            return false;
        }
        strMap.set(values,(strMap.get(values))-1)
    }
    
    for(let count of strMap.values()){
        if(count != 0 ){
            return false;
        }
        return true;
    }
};

console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false