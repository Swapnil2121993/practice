// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in 
// the input string. The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    const str = text.toLowerCase()
    const char = {}
    let count = 0
    for (let word of str) {
        if (!char[word]) {
            char[word] = 1
        }
        else {
            char[word]++
        }
    }
    for (chars in char) {
        if (char[chars] > 1) {
            count++
        }
    }
    return count
}

// need to understand 
function duplicateCount1(text) {
    //...
    var arr = text.toLowerCase().split('');
    console.log(arr)
    var newArr = arr.filter(function (a, b) {
        return arr.indexOf(a) !== b;
    });
    console.log('-----', newArr)
    return newArr.filter(function (item, pos) {
        return newArr.indexOf(item) == pos;
    }).length;
}

console.log(duplicateCount('aabbbe'))

