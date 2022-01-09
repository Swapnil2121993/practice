// Given a string, find the length of the longest substring without 
//repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

//brute force solution

var lengthOfLongestSubstring = function (s) {
    let count = 0;
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        let set = new Set([char])

        for (let j = i + 1; j < s.length; j++) {
            char = s.charAt(j)
            if (set.has(char)) {
                break;
            } else {
                set.add(char);
            }
            count = Math.max(count, set.size)
        }
    }
    return count
}

// console.log(lengthOfLongestSubstring('abcabcbb'))

//using sliding window

var lengthOfLongestSubstring1 = function (s) {
    let count = 0;
    let n = s.length;
    let i = 0;
    let j = 0;
    let set = new Set();

    while (i < n && j < n) {
        let char = s.charAt(j);
        if (!set.has(char)) {
            set.add(char);
            // expand window to right with new element/char
            j++;
            count = Math.max(count, j - i)
        } else {
            // increment index from left
            set.delete(s.charAt(i));
            i++;
        }
    }
    return count
}

console.log(lengthOfLongestSubstring1('abcabcbb'))



//sliding window algorithm : when you are finding subset, subarray, backtracking, dynamic programing
// Time complexity: O(n)

// Have a pointer which tracks the starting index of the current substring
// Create a map of each character and its index
// If the current character is in the lookup
// Change the starting index
// Add the current character to the map
// Update the max length of the substring

// console.log(lengthOfLongestSubstring1('pwwkew'))

//similar problem with array of integer
//console.log(lengthOfLongestSubstring([1,3,5,4,7])) => return [1,3,5]

function lengthOfLongestSubstring2(nums) {
    let result = 0;
    let anchor = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] > nums[i]) anchor = i;
        result = Math.max(result, i - anchor + 1)
    }
    return result
}

// where i = start boundry
// anchor = end boundry
// sliding from start to end

// console.log(lengthOfLongestSubstring2([1, 3, 5, 4, 7])) //return 3