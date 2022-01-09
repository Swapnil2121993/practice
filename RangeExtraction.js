//RangeExtraction

//A format for expressing an ordered list of integers is to use a 
//comma separated list of either

//individual integers
//or a range of integers denoted by the starting integer separated 
//from the end integer in the range by a dash, '-'. The range includes 
//all integers in the interval including both endpoints. It is not considered a 
//range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
//Complete the solution so that it takes a list of integers in increasing 
//order and returns a correctly formatted string in the range format.

//Example:

//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list) {
    let str = '';

    for (i = 0; i < list.length; i++) {
        if ((list[i] + 1) !== list[i + 1]) {
            str += list[i].toString() + ',';
        } else if ((list[i] + 1) === list[i + 1] && (list[i + 1] + 1) === list[i + 2] && list[i - 1] !== list[i] - 1) {
            str += list[i].toString() + '-';
        } else if (str[str.length - 1] === '-' && list[i + 1] !== (list[i] + 1)) {
            str += list[i].toString() + ',';
        } else if ((list[i] - 1) === list[i - 1] && (list[i] + 1) === list[i + 1]) {

        } else if ((list[i] - 1) === list[i - 1] && (list[i - 1] - 1) === list[i - 2] && list[i - 1] !== list[i] - 1) {
            str += list[i].toString() + ',';
        } else {
            str += list[i].toString() + ',';
        }
    }
    return str.slice(0, -1);
}

// need to understand
function solution1(individualIntegers) {
    return individualIntegers
        .reduce(splitIntoRanges, [])
        .map(convertToRange)
        .join(",");
}

function splitIntoRanges(ranges, number) {
    if (!ranges.length) {
        ranges.push([number]);
        return ranges;
    }

    var lastRange = ranges[ranges.length - 1];
    var lastNumber = lastRange[lastRange.length - 1];

    number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
    return ranges;
}

function convertToRange(range) {
    return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))