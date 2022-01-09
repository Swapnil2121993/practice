// Given a string s, find the longest palindromic substring in s. You may 
//assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

//brute force approach 

function isPalindrome(string) {
    let k = 0;
    let l = string.length - 1;
    let isPalindrome = true;

    while (k <= l) {
        if (!(string.charAt(k) === string.charAt(l))) {
            isPalindrome = false;
            break
        }
        k++;
        l--;
    }
    return isPalindrome
}

function longestPalindrome(s) {
    let maxPalindrome = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let subStr = s.substring(i, j)
            if (isPalindrome(subStr)) {
                if (subStr.length > maxPalindrome.length) {
                    maxPalindrome = subStr;
                }
            }
        }
    }
    return maxPalindrome
}

// OPTIMIZED
function expandAroundCenterSolution(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let center = getCenter(s, i);
        let bounds = expandAroundCenter(s, center[0], center[1]);
        let L = bounds[0], R = bounds[1];
        if (R - L > end - start) {
            start = L;
            end = R;
        }
        console.log("---");
        i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center
    }
    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    let L = left, R = right;

    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    console.log("expand return " + (L + 1) + ":" + (R - 1));
    return [++L, --R];
}

function getCenter(s, c) {
    let L = c, R = c;
    console.log("get center start index: " + c);
    while (s[L] === s[++R] && R <= s.length);
    console.log("return " + L + ":" + (R - 1));
    return [L, --R];
}

console.log(longestPalindrome('babad'))

// Complexity O(n^2)