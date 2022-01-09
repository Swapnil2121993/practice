// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

// filter method creates new array for the condition that satisfies as true
// in a callback function

// includes method will return true if element is present in an array or else it will return false
function array_diff(a, b) {
    console.log('includes')
    return a.filter(value => !b.includes(value))
}

// alternate solution using indexOf
function array_diff1(a, b) {
    console.log('indexOf')
    return a.filter(value => b.indexOf(value) == -1)
}


console.log(array_diff([1, 2, 3], [2, 3]))