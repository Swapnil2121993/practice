// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers 
// are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
//add('63829983432984289347293874', '90938498237058927340892374089') -> "91002328220491911630239667963"

// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// BigInt is used to support integer value greater than 2^53 - 1 
// and it is introuduced as part of ecmascript 2020 
// Number only support integer value upto 53 bits
function add(a, b) {
    return (BigInt(a) + BigInt(b)).toString()
}

function add1(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    la = a.length;
    lb = b.length;
    var temp = [];
    var bit = 0;
    for (var i = 0; i < Math.max(la, lb); i++) {
        if (i >= la) {
            var cur = Number(b[i]);
        } else if (i >= lb) {
            var cur = Number(a[i]);
        } else {
            var cur = Number(a[i]) + Number(b[i]);
        }
        temp.push((cur + bit) % 10);
        bit = Math.floor((cur + bit) / 10);
    }
    if (bit == 1) {
        temp.push(1);
    }
    var ans = "";
    for (var i = temp.length - 1; i >= 0; i--)
        ans += temp[i];
    return ans;
}

console.log(add1("123", "321"))