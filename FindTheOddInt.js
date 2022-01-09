// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// #Example
// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);

function findOdd(array) {
    let char = {}
    let oddElement = ''
    for (element of array) {
        if (!char[element]) {
            char[element] = 1
        }
        else {
            char[element]++
        }
    }

    for (chars in char) {
        if (char[chars] % 2 !== 0) {
            oddElement += chars
        }
    }
    return Number(oddElement)
}

// kind of tricky a^b bitwise xor
const findOdd1 = (xs) => xs.reduce((a, b) => {
    console.log('a', a)
    console.log('b', b)
    return a ^ b
})

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))