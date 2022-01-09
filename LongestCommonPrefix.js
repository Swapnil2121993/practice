// Write a function to find the longest common prefix string amongst an array 
//of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(string) {
    if (string.length === null || string.length === 0) return ''
    let prefix = string[0];

    for (let i = 1; i < string.length; i++) {
        while (string[i].indexOf(prefix) === -1) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}

function longestCommonPrefix1(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    var pointer = 0;
    var longestPrefix = '';
    var currentChar = '';
    var stillSearching = true;

    while (stillSearching) {
        currentChar = strs[0][pointer];

        if (!currentChar) break;

        for (var i = 0; i < strs.length; i++) {
            if (strs[i][pointer] !== currentChar) {
                stillSearching = false;
            }
        }

        if (stillSearching) longestPrefix += currentChar;
        pointer++;
    }

    return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))