// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.
// Example 3:

// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

var restoreString = function(s, indices) {
    var arr = [];
    indices.forEach((shuffledIndex, currentIndex) => {
        return arr[shuffledIndex] = s[currentIndex];
    });
    return arr.join('');
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))