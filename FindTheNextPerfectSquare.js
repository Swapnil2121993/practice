// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect 
// square after the one passed as a parameter. Recall that an integral perfect 
// square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. 
// You may assume the parameter is positive.

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

// Number.isInteger will return false if number is decimal or else it will return true
function findNextSquare(n) {
    const squareRoot = Math.sqrt(n)
    if (Number.isInteger(squareRoot)) {
        const n = squareRoot + 1
        return n * n
    }
    return -1
}

function findNextSquare1(n) {
    let root = Math.sqrt(n)
    return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1
}

console.log(findNextSquare1(625))