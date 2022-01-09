// algoexpert

//O(n) time | O(1) space (only 26 charactes and that are in lower case always)
// input: 'abcdcaf'
// output: index of b which is 1
// return -1 if not single non repeating character

function firstNonRepeatingCharacter(string) {
// Write your code here.
    const charFrequencies = {}
    for(const char of string) {
        if(!charFrequencies[char]) charFrequencies[char] = 0
        charFrequencies[char]++
    }
    for(let idx = 0; idx<string.length; idx++) {
        const character = string[idx]
        if(charFrequencies[character] === 1) return idx 
    }
    return -1
  }
  
//O(n^2) time | O(1) space
function firstNonRepeatingCharacter1(string) {
// Write your code here.
    for(let idx =0; idx<string.length; idx++) {
        let foundDuplicate = false
        for(let idx2 =0; idx2<string.length; idx2++) {
            if(string[idx] === string[idx2] && idx !== idx2) foundDuplicate = true
        }
        if(!foundDuplicate) return idx
    }
    return -1;
} 

console.log(firstNonRepeatingCharacter('abcdcaf'))