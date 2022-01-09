// You are given an array strarr of strings and an integer k. Your task is
// to return the first longest string consisting of k consecutive strings 
// taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note 
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
    var n = strarr.length,
        str = '';

    if (n = 0 || k > n || k <= 0) {
        return str;
    }

    for (var i = 0; i < strarr.length; i++) {
        var currentStr = strarr.slice(i, k + i).join('');
        if (currentStr.length > str.length) {
            str = currentStr;
        }
    }
    return str;
}

function longestConsec1(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return "";
    }
    // console.log(strarr.map((value, index) => (
    //     strarr.slice(index, index + k).join('')
    // )))
    return strarr
        .map((value, index) => (
            strarr.slice(index, index + k).join('')
        ))
        .reduce((longest, current) => {
            console.log(longest, current)
            return current.length > longest.length ? current : longest
        })
}

console.log(longestConsec1(['swapnil', 'neel', 'trivedi'], 3))