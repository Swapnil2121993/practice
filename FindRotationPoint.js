//I have an array of words that are mostly alphabetical, except they
//start somewhere in the middle of the alphabet, reach the end, 
//and then start from the beginning of the alphabet. In other words, 
//this is an alphabetically ordered array that has been "rotated." For example:

// const words = [
//     'ptolemaic',
//     'retrograde',
//     'supplant',
//     'undulate',
//     'xenoepist',
//     'asymptote',  // <-- rotates here!
//     'babka',
//     'banoffee',
//     'engender',
//     'karpatka',
//     'othellolagkage',
//   ];

//Write a function for finding the index of the "rotation point," 
//which is where I started working from the beginning of the dictionary. 
//This array is huge (there are lots of words I don't know) so we want to 
//be efficient here.

function findRotationPoint(words) {
    const firstWord = words[0];

    let floorIndex = 0;
    let ceilingIndex = words.length - 1;

    while (floorIndex < ceilingIndex) {

        // Guess a point halfway between floor and ceiling
        const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

        // If guess comes after first word or is the first word
        if (words[guessIndex] >= firstWord) {

            // Go right
            floorIndex = guessIndex;
        } else {

            // Go left
            ceilingIndex = guessIndex;
        }

        // If floor and ceiling have converged
        if (floorIndex + 1 === ceilingIndex) {

            // Between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            break;
        }
    }

    return ceilingIndex;
}

console.log(findRotationPoint(['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist', 'asymptote']))

// Breakdown
// The array is mostly ordered. We should exploit that fact.

// What's a common algorithm that takes advantage of the fact that an array is 
//sorted to find an item efficiently?

// Binary search! ↴ We can write an adapted version of binary search for this.

//In each iteration of our binary search, ↴ how do we know if the rotation 
//point is to our left or to our right?

// Try drawing out an example array!

//   words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];
//                               ^

// If our "current guess" is the middle item, which is 'c' in this case, 
//is the rotation point to the left or to the right? How do we know?

// Notice that every item to the right of our rotation point is always 
//alphabetically before the first item in the array.

// So the rotation point is to our left if the current item is less than the 
//first item. Else it's to our right.

//Complexity
//Each time we go through the while loop, we cut our range of indices in half, 
//just like binary search. So we have O(lgn) loop iterations.

//In each loop iteration, we do some arithmetic and a string comparison. 
//The arithmetic is constant time, but the string comparison requires looking 
//at characters in both words—every character in the worst case. 
//Here, we'll assume our word lengths are bounded by some constant so 
//we'll say the string comparison takes constant time.

//Putting everything together, we do O(lgn) iterations, and each iteration is 
//O(1) time. So our time complexity is O(lgn).

//We use O(1) space to store the first word and the floor and ceiling indices.

// What We Learned
// The answer was a modified version of binary search.

// This is a great example of the difference between "knowing" something and 
//knowing something. You might have seen binary search before, but that doesn't 
//help you much unless you've learned the lessons of binary search.

// Binary search teaches us that when an array is sorted or mostly sorted:

// The value at a given index tells us a lot about what's to the left and what's to the right.
// We don't have to look at every item in the array. By inspecting the middle item, 
// we can "rule out" half of the array.
// We can use this approach over and over, cutting the problem in half until we 
//have the answer. This is sometimes called "divide and conquer."

// So whenever you know an array is sorted or almost sorted, think about these lessons from binary search and see if they apply.

