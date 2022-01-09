// First, I wanna know how much money I could have made yesterday if I'd been 
// trading Apple stocks all day.

//So I grabbed Apple's stock prices from yesterday and put them in an array 
//called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// // Returns 6 (buying for $5 and selling for $11)

// No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.


function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
        console.error('Generating profit requires at least 2 stock price values');
    }
    // We'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0]

    // Start at the second (index 1) time
    // We can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // If we started at index 0, we'd try to buy *and* sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be *negative*--we'd return 0.
    for (let i = 1; i < stockPrices.length; i++) {
        let currentPrice = stockPrices[i]

        // See what our profit would be if we bought at the
        // min price and sold at the current pric
        let potentialProfit = currentPrice - minPrice

        // Update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit)

        // Update minPrice so it's always
        // the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice)
    }
    return maxProfit
}

console.log(getMaxProfit([1, 2, 3, 4, 5]))
//complextiyy O(n)time and O(1) space


// What We Learned
// This one's a good example of the greedy ↴ approach in action. 
//Greedy approaches are great because they're fast (usually just one pass 
//through the input). But they don't work for every problem.

// How do you know if a problem will lend itself to a greedy approach? 
//Best bet is to try it out and see if it works. Trying out a greedy approach 
//should be one of the first ways you try to break down a new question.

// To try it on a new problem, start by asking yourself:

// "Suppose we could come up with the answer in one pass through the input, 
//by simply updating the 'best answer so far' as we went. What additional values 
//would we need to keep updated as we looked at each item in our input, in order 
//to be able to update the 'best answer so far' in constant time?"

// In this case:

// The "best answer so far" is, of course, the max profit that we can get based on the 
//prices we've seen so far.

// The "additional value" is the minimum price we've seen so far. If we keep that updated, 
// we can use it to calculate the new max profit so far in constant time. The max profit 
//is the larger of:

// The previous max profit
// The max profit we can get by selling now (the current price minus the minimum price seen so far)
// Try applying this greedy methodology to future questions.

//greedy algorithm

// A greedy algorithm builds up a solution by choosing the option that looks the best at every step.

// Say you're a cashier and need to give someone 67 cents (US) using as few coins as possible. How would you do it?

// Whenever picking which coin to use, you'd take the highest-value coin you could. A quarter, another quarter, then a dime, a nickel, and finally two pennies. That's a greedy algorithm, because you're always greedily choosing the coin that covers the biggest portion of the remaining amount.

// Some other places where a greedy algorithm gets you the best solution:

// Trying to fit as many overlapping meetings as possible in a conference room? At each step, 
//schedule the meeting that ends earliest.
// Looking for a minimum spanning tree in a graph? At each step, greedily pick the cheapest 
//edge that reaches a new vertex.
// Careful: sometimes a greedy algorithm doesn't give you an optimal solution:

// When filling a duffel bag with cakes of different weights and values, choosing the cake 
// with the highest value per pound doesn't always produce the best haul.
// To find the cheapest route visiting a set of cities, choosing to visit the cheapest city 
//you haven't been to yet doesn't produce the cheapest overall itinerary.
// Validating that a greedy strategy always gets the best answer is tricky. Either prove 
//that the answer produced by the greedy algorithm is as good as an optimal answer, or 
//run through a rigorous set of test cases to convince your interviewer (and yourself) 
//that its correct.