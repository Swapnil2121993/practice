//You created a game that is more popular than Angry Birds.

//Each round, players receive a score between 0 and 100, which you use to 
//rank them from highest to lowest. So far you're using an algorithm that sorts 
//in O(nlgn) time, but players are complaining that their rankings aren't 
//updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(nlgn) time.

// For example:

// const unsortedScores = [37, 89, 41, 65, 91, 53];
// const HIGHEST_POSSIBLE_SCORE = 100;

// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]

function sortScores(unsortedScores, highestPossibleScore) {
    // Array of 0s at indices 0..highestPossibleScore
    const scoreCount = new Array(highestPossibleScore + 1).fill(0)

    // Populate scoreCounts
    unsortedScores.forEach(score => {
        scoreCount[score]++
    })

    // Populate the final sorted array
    const sortedScores = [];
    // For each item in scoreCounts
    for (let score = highestPossibleScore; score >= 0; score--) {
        const count = scoreCount[score]

        //for number of times item occur 

        for (let time = 0; time < count; time++) {
            sortedScores.push(score)
        }
    }

    return sortedScores
}

console.log(sortScores([37, 89, 41, 65, 91, 53], 100))

//Complexity
//O(n) time and O(n) space, where n is the number of scores.

//Breakdown
//O(nlgn) is the time to beat. Even if our array of scores were already sorted
//we'd have to do a full walk through the array to confirm that it was in 
//fact fully sorted. So we have to spend at least O(n) time on our sorting function. 
//If we're going to do better than O(nlgn), we're probably going to do exactly O(n).

//What are some common ways to get O(n) runtime?

//One common way to get O(n) runtime is to use a greedy algorithm. ↴ But in this 
//case we're not looking to just grab a specific value from our input set 
//(e.g. the "largest" or the "greatest difference")—we're looking to reorder 
//the whole set. That doesn't lend itself as well to a greedy approach.

//Another common way to get O(n) runtime is to use counting. ↴ We can build an 
//array scoreCounts where the indices represent scores and the values 
//represent how many times the score appears. Once we have that, can we 
//generate a sorted array of scores?

//What if we did an in-order walk through scoreCounts. Each index represents a 
//score and its value represents the count of appearances. So we can simply 
//add the score to a new array sortedScores as many times as count of appearances.