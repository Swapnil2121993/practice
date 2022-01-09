// Write a function fib() that takes an integer n and returns the nth
//Fibonacci ↴ number.

// Let's say our Fibonacci series is 0-indexed and starts with 0. So:

// fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3

// using recursion
// function Fibonacci(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     return Fibonacci(n - 1) + Fibonacci(n - 2)
// }

//using memoization

class Fibonacci {
    constructor() {
        this.memo = {};
    }

    Fibo(n) {
        // Edge case: negative index
        if (n < 1) {
            return `invalid number`
        }

        // Base case: 0 or 1
        else if (n === 0 || n === 1) {
            return 1
        }

        // See if we've already calculated this
        if (this.memo.hasOwnProperty(n)) {
            return this.memo[n]
        }

        let result = this.Fibo(n - 1) + this.Fibo(n - 2);
        this.memo[n] = result
        return result;
    }
}

// using bottom up

function fib(n) {
    if (n < 1) {
        return 'invalid number'
    }
    if (n === 0 || n === 1) {
        return 1
    }

    // We'll be building the fibonacci series from the bottom up
    // So we'll need to track the previous 2 numbers at each step
    let prevPrev = 0;
    let prev = 1;
    let current;

    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    for (let i = 1; i < n; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }
    return current
}

console.log(fib(10))

//Complexity
// O(n) time and O(1) space (for bottom up)

//The computer will build up a call stack with fib(5), fib(4), fib(3), fib(2), fib(1). 
//Then we'll start returning, and on the way back up our tree we'll be able 
//to compute each node's 2nd call to fib() in constant time by just looking 
//in the memo. n time in total.(for memoization)

// What about space? memo takes up n space. 
//Plus we're still building up a call stack that'll occupy nn space. 
//Can we avoid one or both of these space expenses? (for memoization)

//We can notice this is a binary tree ↴ whose height is nn, which means the total 
//number of nodes is O(2 ^ n)

// So our total runtime is O(2 ^ n).That's an "exponential time cost," since the n is in an exponent. 
//Exponential costs are terrible. This is way worse than O(n^2)O(n) or 
//even O(n ^ { 100})

// Our recurrence tree above essentially gets twice as big each time we 
//add 1 to n. So as n gets really big, our runtime quickly spirals out of 
//control. (for recursion)

