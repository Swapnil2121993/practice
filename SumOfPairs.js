//Sum of Pairs
//Given a list of integers and a single sum value, return the first 
//two values (parse from the left please) in order of appearance 
//that add up to form the sum.

//sum_pairs([11, 3, 7, 5],         10)
//#              ^--^      3 + 7 = 10
//== [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

var sum_pairs = function sum_pairs(integers, sum) {
    var seenNumbers = {};
    for (var i = 0; i < integers.length; i++) {
        if (seenNumbers.hasOwnProperty(sum - integers[i])) {
            return [sum - integers[i], integers[i]];
        } else {
            seenNumbers[integers[i]] = true;
        }
    }
    return undefined;
}

var sum_pairs1 = function sum_pairs(ints, s) {
    let seen = new Set();
    for (let i of ints) {
        if (seen.has(s - i)) return [s - i, i];
        seen.add(i);
    }
}

console.log(sum_pairs([1, 2, 3, 4], 6))