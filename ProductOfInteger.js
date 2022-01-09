//You have an array of integers, and for each index you want to find the 
//product of every integer except the integer at that index.

//Write a function getProductsOfAllIntsExceptAtIndex() that takes an array 
//of integers and returns an array of the products.

// example, given:

//[1, 7, 3, 4]

//your function would return:

//[84, 12, 28, 21]

//by calculating:

//[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

//Here's the catch: You can't use division in your solution!

// input array
//[3, 1, 2, 5, 6, 4]

// multiplication of all integers before each index
// (we give index 0 a value of 1 since it has no integers before it)
//[1, 3,  3 * 1,  3 * 1 * 2,  3 * 1 * 2 * 5,  3 * 1 * 2 * 5 * 6]

// final array of the products of all the integers before each index
//[1, 3, 3, 6, 30, 180]

//Notice that we're always adding one new integer to our multiplication for 
//each index!

//So to get the products of all the integers before each index, we could greedily 
//store each product so far and multiply that by the next integer. 
//Then we can store that new product so far and keep going.

//So how can we apply this to our input array?

//Let’s make an array productsOfAllIntsBeforeIndex:


function getProductsOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length < 2) {
        console.error('Getting the product of numbers at other indices requires at least 2 numbers');
    }

    const productsOfAllIntsExceptAtIndex = [];

    // For each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    let productSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // For each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]))

//Complexity

//O(n) time and O(n) space. We make two passes through our input an array, 
//and the array we build always has the same length as the input array.

//What We Learned
//Another question using a greedy ↴ approach. The tricky thing about this one: we couldn't 
//actually solve it in one pass. But we could solve it in two passes!

//This approach probably wouldn't have been obvious if we had started off trying to use 
//a greedy approach.

//Instead, we started off by coming up with a slow (but correct) brute force solution 
//and trying to improve from there. We looked at what our solution actually calculated, 
//step by step, and found some repeat work. Our final answer came from brainstorming 
//ways to avoid doing that repeat work.

//So that's a pattern that can be applied to other problems:

//Start with a brute force solution, look for repeat work in that solution, 
//and modify it to only do that work once.