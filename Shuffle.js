//Write a function for doing an in-place ↴ shuffle of an array.

//The shuffle must be "uniform," meaning each item in the original array must 
//have the same probability of ending up in each spot in the final array.

//Assume that you have a function getRandom(floor, ceiling) for getting a random 
//integer that is >= floor and <= ceiling.

//Gotchas
//A common first idea is to walk through the array and swap each element with a 
//random other element. Like so:

function getRandom(floor, ceiling) {
    return Math.floor(Math.random(ceiling - floor + 1)) + floor;
}

function nativeShuffle(array) {
    // For each index in the array
    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        // Grab a random other index
        const secondIndex = getRandom(0, array.length - 1);

        //And swap the values
        if (secondIndex !== firstIndex) {
            const temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;
        }
    }
    return array
}

//However, this does not give a uniform random distribution.

//Why? We could calculate the exact probabilities of two outcomes to show they 
//aren't the same. But the math gets a little messy. Instead, think of it this way:

//Suppose our array had 3 elements: [a, b, c]. This means it'll make 3 calls to getRandom(0, 2). 
//That's 3 random choices, each with 3 possibilities. So our total number of 
//possible sets of choices is 3*3*3=27 Each of these 27 sets of choices is 
//equally probable.

//Breakdown
//It helps to start by ignoring the in-place ↴ requirement, then adapt the 
//approach to work in place.

//Also, the name "shuffle" can be slightly misleading—the point is to arrive at 
//a random ordering of the items from the original array. Don't fixate too 
//much on preconceived notions of how you would "shuffle" e.g. a deck of cards.

//How might we do this by hand?

//We can simply choose a random item to be the first item in the resulting array, 
//then choose another random item (from the items remaining) to be the second 
//item in the resulting array, etc.

//Assuming these choices were in fact random, this would give us a uniform shuffle. 
//To prove it rigorously, we can show any given item aa has the same probability 
//(1/n) of ending up in any given spot.

//If we didn't have the "in-place" requirement, we could allocate a new array, 
//then one-by-one take a random item from the input array, remove it, 
//put it in the first position in the new array, and keep going until the input 
//array is empty (well, probably a copy of the input array—best not to destroy 
//the input)

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
    // If it's 1 or 0 items, just return
    if (array.length <= 1) return;

    for (let indexWeAreChoosingFor = 0; indexWeAreChoosingFor < array.length; indexWeAreChoosingFor++) {
        // Choose a random not-yet-placed item to place there
        // (could also be the item currently in that spot)
        // must be an item AFTER the current item, because the stuff
        // before has all already been placed
        const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1)

        // Place our random choice in the spot by swapping
        if (randomChoiceIndex !== indexWeAreChoosingFor) {
            const valueAtIndexWeAreChoosing = array[indexWeAreChoosingFor];
            array[indexWeAreChoosingFor] = array[randomChoiceIndex];
            array[randomChoiceIndex] = valueAtIndexWeAreChoosing;
        }
    }
    return array
}

console.log(shuffle(['a', 'b', 'c']))

//Solution
//We choose a random item to move to the first index, then we choose a random 
//other item to move to the second index, etc. We "place" an item in an 
//index by swapping it with the item currently at that index.

//Crucially, once an item is placed at an index it can't be moved. 
//So for the first index, we choose from n items, for the second index 
//we choose from n−1 items, etc.

// Complexity
// O(n) time and O(1) space.

// What We Learned
// Don't worry, most interviewers won't expect a candidate to know the 
//Fisher-Yates shuffle algorithm. Instead, they'll be looking for the 
//problem-solving skills to derive the algorithm, perhaps with a couple 
//hints along the way.

//They may also be looking for an understanding of why the naive solution 
//is non-uniform (some outcomes are more likely than others). 
//If you had trouble with that part, try walking through it again.