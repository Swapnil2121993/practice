// Your quirky boss collects rare, old coins...

// They found out you're a programmer and asked you to solve something they've 
//been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of the available 
//denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would 
//output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {

	// Base cases:
	// We hit the amount spot on. yes!
	if (amountLeft === 0) return 1;

	// We overshot the amount left (used too many coins)
	if (amountLeft < 0) return 0;

	// if We're out of denominations
	if (currentIndex === denominations.length) return 0;

	// console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

	// Choose a current coin
	const currentCoin = denominations[currentIndex];

	// See how many possibilities we can get
	// for each number of times to use currentCoin
	let numPossibilities = 0;
	while (amountLeft >= 0) {
		numPossibilities += changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
		amountLeft -= currentCoin;
	}

	return numPossibilities;
}
// console.log(changePossibilitiesTopDown(4, [1, 2, 3]))

//Memoization is a common strategy for dynamic programming problems, which are 
//problems where the solution is composed of solutions to the same problem with 
//smaller inputs (as with the Fibonacci problem, above). The other common strategy for 
//dynamic programming problems is going bottom-up, which is usually cleaner and often more efficient.

  class Change {
  constructor() {
    this.memo = {};
  }

  changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {

    // Check our memo and short-circuit if we've already solved this one
    const memoKey = [amountLeft, currentIndex].join(', ');
    if (this.memo.hasOwnProperty(memoKey)) {
      console.log('grabbing memo [' + memoKey + ']');
      return this.memo[memoKey];
    }

    // Base cases:
    // We hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // We overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // We're out of denominations
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

    // Choose a current coin
    const currentCoin = denominations[currentIndex];

    // See how many possibilities we can get
    // for each number of times to use currentCoin
    let numPossibilities = 0;
    while (amountLeft >= 0) {
      numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }

    // Save the answer in our memo so we don't compute it again
    this.memo[memoKey] = numPossibilities;
    return numPossibilities;
  }
}

const amountLeft = new Change();
amountLeft.changePossibilitiesTopDown(4, [1, 2, 3])

//Put simply, a bottom-up algorithm "starts from the beginning," while a 
//recursive algorithm often "starts from the end and works backwards.

//Going bottom-up is a common strategy for dynamic programming problems, which are 
//problems where the solution is composed of solutions to the same problem with 
//smaller inputs (as with multiplying the numbers 1..n, above). The other 
//common strategy for dynamic programming problems is memoization.

//need to understand bottom up
function changePossibilitiesBottomUp(amount, denominations) {

	// Initialize an array of zeros with indices up to amount
	const waysOfDoingNcents = new Array(amount + 1).fill(0);
	waysOfDoingNcents[0] = 1;

	denominations.forEach(coin => {
		for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
			const higherAmountRemainder = higherAmount - coin;
			waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
		}
	});

	return waysOfDoingNcents[amount];
}

//O(n∗m) time and O(n) additional space, where nn is the amount of money and mm 
//is the number of potential denominations.

// What We Learned
// This question is in a broad class called "dynamic programming." 
//We have a bunch more dynamic programming questions we'll go over later.

// Dynamic programming is kind of like the next step up from greedy. 
//↴ You're taking that idea of "keeping track of what we need in order to 
//update the best answer so far," and applying it to situations where the 
//new best answer so far might not just have to do with the previous answer, 
//but some other earlier answer as well.

// So as you can see in this problem, we kept track of all of our previous 
//answers to smaller versions of the problem (called "subproblems") in a big 
//array called waysOfDoingNCents.

// Again, same idea of keeping track of what we need in order to update the 
//answer as we go, like we did when storing the max product of 2,
//min product of 2, etc in the highest product of 3 question. 
//Except now the thing we need to keep track of is all our previous answers, 
//which we're keeping in an array.

// We built that array bottom-up, but we also talked about how we could do it 
//top-down and memoize. Going bottom-up is cleaner and usually more efficient, 
//but often it's easier to think of the top-down version first and try to adapt 
//from there.

// Dynamic programming is a weak point for lots of candidates. If this one was 
//tricky for you, don't fret. We have more coming later.