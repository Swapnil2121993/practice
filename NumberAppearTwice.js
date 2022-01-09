//I have an array of n + 1 numbers. Every number in the range 1..n 
//appears once except for one number that appears twice.

//Write a function for finding the number that appears twice.

function findRepeat(numbers) {
    if (numbers.length < 2) {
        console.log('Finding duplicate requires at least two numbers');
    }

    const n = numbers.length - 1;
    const sumWithoutDuplicate = (n * n + n) / 2;
    const actualSum = numbers.reduce((acc, cur) => acc + cur, 0);

    return actualSum - sumWithoutDuplicate;
}

console.log(findRepeat([1, 2, 5, 3, 5, 10]))

// Solution
// First, we sum all numbers 1..n We can do this using the equation:

// \frac{n^2 + n}{2} 

// because the numbers in 1..n are a triangular series. ↴

//Second, we sum all numbers in our input array, which should be the same as 
//our other sum but with our repeat number added in twice. 
//So the difference between these two sums is the repeated number!

// Complexity
// O(n) time. We can sum all the numbers 1..n in O(1) time using the fancy 
//formula, but it still takes O(n) time to sum all the numbers in our input array.

// O(1) additional space—the only additional space we use is for numbers 
//to hold the sums with and without the repeated value.