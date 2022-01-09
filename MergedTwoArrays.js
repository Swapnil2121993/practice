//In order to win the prize for most cookies sold, my friend Alice and I are
//going to merge our Girl Scout Cookies orders and enter as one unit.

//Each order is represented by an "order id" (an integer).

//We have our lists of orders sorted numerically already, in arrays. 
//Write a function to merge our arrays of orders into one sorted array.

// For example:

// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

//Complexity O(logn)
// function mergedSortedArrays(myArray, alicesArray) {
//     const mergedArray = myArray.concat(alicesArray);
//     return mergedArray.sort((a, b) => a - b)
// }


//Complexity O(n) time and O(n) space
function mergedSortedArrays(myArray, alicesArray) {
    //set up merged array
    const mergedArray = [];

    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;

    while (currentIndexMerged < (myArray.length + alicesArray.length)) {

        const isMyArrayExhausted = currentIndexMine >= myArray.length;
        const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

        // Case: next comes from my array
        // My array must not be exhausted, and EITHER:
        // 1) Alice's array IS exhausted, or
        // 2) The current element in my array is less
        //    than the current element in Alice's array

        if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
            myArray[currentIndexMine] < alicesArray[currentIndexAlices])) {
            mergedArray[currentIndexMerged] = myArray[currentIndexMine]
            currentIndexMine++;
        }

        // Case: next comes from Alice's array
        else {
            mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices]
            currentIndexAlices++;
        }
        currentIndexMerged++
    }

    return mergedArray

}

console.log(mergedSortedArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))

//BreakDown

// A good general strategy for thinking about an algorithm is to try writing 
//out a sample input and performing the operation by hand. If you're stuck, 
//try that!

//Since our arrays are sorted, we know they each have their smallest item 
//in the 0th index. So the smallest item overall is in the 0th index of one 
//of our input arrays!

// Which 0th element is it? Whichever is smaller!

// To start, let's just write a function that chooses the 0th element for our sorted array.

//   function mergeArrays(myArray, alicesArray) {

//   const mergedArray = [];

//   const headOfMyArray = myArray[0];
//   const headOfAlicesArray = alicesArray[0];

//   // Case: 0th comes from my array
//   if (headOfMyArray < headOfAlicesArray) {
//     mergedArray[0] = headOfMyArray;

//     // Case: 0th comes from Alice's array
//   } else {
//     mergedArray[0] = headOfAlicesArray;
//   }

//   // Eventually we'll want to return the merged array
//   return mergedArray;
// }

// Okay, good start! That works for finding the 0th element.Now how do we choose the next element ?

//     Let's look at a sample input:

//     [3, 4, 6, 10, 11, 15]  // myArray
//     [1, 5, 8, 12, 14, 19]  // alicesArray

// To start we took the 0th element from alicesArray and put it in the 0th slot in the output array:

// [3, 4, 6, 10, 11, 15]  // myArray
// [1, 5, 8, 12, 14, 19]  // alicesArray
// [1, x, x, x, x, x]  // mergedArray

// We need to make sure we don't try to put that 1 in mergedArray again. We should mark it as "already merged" somehow. For now, we can just cross it out:

// [3, 4, 6, 10, 11, 15]  // myArray
// [x, 5, 8, 12, 14, 19]  // alicesArray
// [1, x, x, x, x, x]  // mergedArray

// Or we could even imagine it's removed from the array:

// [3, 4, 6, 10, 11, 15]  // myArray
// [5, 8, 12, 14, 19]      // alicesArray
// [1, x, x, x, x, x]  // mergedArray

//Now to get our next element we can use the same approach we used to get the 
//0th element—it's the smallest of the earliest unmerged elements in either array! 
//In other words, it's the smaller of the leftmost elements in either array, 
//assuming we've removed the elements we've already merged in.

//So in general we could say something like:

// We'll start at the beginnings of our input arrays, since the smallest elements will be there.
// As we put items in our final mergedArray, we'll keep track of the fact that they're "already merged."
// At each step, each array has a first "not-yet-merged" item.
// At each step, the next item to put in the mergedArray is the smaller of those two "not-yet-merged" items!
// Can you implement this in code?

//   function mergeArrays(myArray, alicesArray) {

//   const mergedArray = [];

//   let currentIndexAlices = 0;
//   let currentIndexMine = 0;
//   let currentIndexMerged = 0;

//   while (currentIndexMerged < (myArray.length + alicesArray.length)) {
//     const firstUnmergedAlices = alicesArray[currentIndexAlices];
//     const firstUnmergedMine = myArray[currentIndexMine];

//     // Case: next comes from my array
//     if (firstUnmergedMine < firstUnmergedAlices) {
//       mergedArray[currentIndexMerged] = firstUnmergedMine;
//       currentIndexMine++;

//       // Case: next comes from Alice's array
//     } else {
//       mergedArray[currentIndexMerged] = firstUnmergedAlices;
//       currentIndexAlices++;
//     }

//     currentIndexMerged++;
//   }

//   return mergedArray;
// }

// Here are some edge cases:

// One or both of our input arrays is 0 elements or 1 element
// One of our input arrays is longer than the other.
// One of our arrays runs out of elements before we're done merging.
// Actually, (3) will always happen. In the process of merging our arrays, we'll certainly exhaust one before we exhaust the other.

// Does our function handle these cases correctly?

// If both arrays are empty, we're fine. But for all the other edge cases, at some point firstUnmergedMine or firstUnmergedAlices will be undefined because there won't be an element at one of those indices. Then JavaScript will compare undefined with a number, which will always be false, and mergedArray might be out of order or contain undefined!

// How can we fix this?

// We can probably solve these cases at the same time. They're not so different—they just have to do with indexing past the end of arrays.

// To start, we could treat each of our arrays being out of elements as a separate case to handle, in addition to the 2 cases we already have. So we have 4 cases total. Can you code that up?

// Be sure you check the cases in the right order!

//   function mergeArrays(myArray, alicesArray) {

//   const mergedArray = [];

//   let currentIndexAlices = 0;
//   let currentIndexMine = 0;
//   let currentIndexMerged = 0;

//   while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    // Case: my array is exhausted
    // if (currentIndexMine >= myArray.length) {
    //   mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
    //   currentIndexAlices++;

      // Case: Alice's array is exhausted
    // } else if (currentIndexAlices >= alicesArray.length) {
    //   mergedArray[currentIndexMerged] = myArray[currentIndexMine];
    //   currentIndexMine++;

    //   // Case: my item is next
    // } else if (myArray[currentIndexMine] < alicesArray[currentIndexAlices]) {
    //   mergedArray[currentIndexMerged] = myArray[currentIndexMine];
    //   currentIndexMine++;

      // Case: Alice's item is next
    // } else {
    //   mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
    //   currentIndexAlices++;
    // }

//     currentIndexMerged++;
//   }

  //return mergedArray;
//}