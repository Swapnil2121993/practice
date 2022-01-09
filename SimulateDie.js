//You have a function rand7() that generates a random integer from 1 to 7. 
//Use it to write a function rand5() that generates a random integer from 1 to 5.

//rand7() returns each integer with equal probability. rand5() must also return 
//each integer with equal probability.

// Gotchas
// Your first thought might be to simply take the result of rand7() and take a 
//modulus:

//   function rand5() {
//   return rand7() % 5 + 1;
// }

//However, this won't give an equal probability for each possible result. We can 
//write out each possible result from rand7() (each of which is equally probable, 
//per the problem statement) and see that some results for rand5() are more likely 
//because they are caused by more results from rand7():

// rand7()	rand5()
// 1	2
// 2	3
// 3	4
// 4	5
// 5	1
// 6	2
// 7	3
//So we see that there are two ways to get 2 and 3, but only one way to get 
//1, 4, or 5. This makes 2 and 3 twice as likely as the others.

//The answer takes worst-case infinite time. However, we can get away with 
//worst-case O(1) space. Does your answer have a non-constant space cost? 
//If you're using recursion (and your language doesn't have tail-call optimization ↴ ), 
//you're potentially incurring a worst-case infinite space cost in the call stack.
//But replacing your recursion with a loop avoids this.


//We simply "re-roll" whenever we get a number greater than 5.
function rand5() {
    let result = 7;

    while (result > 5) {
        result = rand7()
    }
    return result
}

// Complexity
///Worst-case O(∞) time (we might keep re-rolling forever) and O(1) space.

//Note that if we weren't worried about the potential space cost (nor the potential stack overflow ↴ ) 
//of recursion, we could use an arguably-more-readable recursive approach with 
//O(∞) space cost:
function rand5() {
    const result = rand7()
    return result <= 5 ? result : rand5()
}

//Bonus
//This kind of math is generally outside the scope of a coding interview, but: 
//if you know a bit of number theory you can prove that there exists no solution 
//which is guaranteed to terminate. Hint: it follows from the fundamental theorem 
//of arithmetic. ↴

//What We Learned
//Making sure each possible result has the same probability is a big part of 
//what makes this one tricky.

//If you're ever struggling with the math to figure something like that out, 
//don't be afraid to just count. As in, write out all the possible results from 
//rand7(), and label each one with its final outcome for rand5(). Then count up 
//how many ways there are to make each final outcome. If the counts aren't the same, 
//the function isn't uniformly random.

// reverse example (new)

// You have a function rand5() that generates a random integer from 1 to 5. 
// Use it to write a function rand7() that generates a random integer from 1 to 7.

// rand5() returns each integer with equal probability. 
// rand7() must also return each integer with equal probability.

// Breakdown
// Because we need a random integer between 1 and 7, we need at least 7 possible outcomes of our calls to rand5(). One call to rand5() only has 5 possible outcomes. So we must call rand5() at least twice.

// Can we get away with calling rand5() exactly twice?

// Our first thought might be to simply add two calls to rand5(), then take a modulus to convert it to an integer in the range 1..71..7:

function rand7Mod() {
    return (rand5() + rand5()) % 7 + 1;
}

// However, this won't give us an equal probability of getting each integer in the range 1..71..7. Can you see why?

// There are at least two ways to show that different results of rand7Mod() have different probabilities of occurring:

// Count the number of outcomes of our two rand5() calls which give each possible result of rand7Mod()
// Notice something about the total number of outcomes of two calls to rand5()
// If we count the number of ways to get each result of rand7Mod():

// result of rand7Mod()	# pairs of rand5() results that give that result
// 1	4
// 2	3
// 3	3
// 4	3
// 5	3
// 6	4
// 7	5
//So we see that, for example, there are five outcomes that give us 7 but 
//only three outcomes that give us 5. We're almost twice as likely to get a 
//7 as we are to get a 5.

//But even without counting the number of ways to get each possible result, 
//we could have noticed something about the total number of outcomes of two 
//calls to rand5() , which is 25 (5*5). If each of our 7 results of rand7Mod() 
//were equally probable, we'd need to have the same number of outcomes for 
//each of the 7 integers in the range 1..7. That means our total number of 
//outcomes would have to be divisible by 7, and 25 is not.

// Okay, so rand7Mod() won't work. How do we get equal probabilities for each 
//integer from 1 to 7?

function rand7() {
    while (true) {
        const roll1 = rand5();
        const roll2 = rand5();

        const outComeNumber = (roll1 - 1 * 5) + (roll2 - 1) + 1;
        // If we hit an extraneous
        // outcome we just re-roll
        if (outComeNumber > 21) continue;

        // Our outcome was fine. return it!
        return outComeNumber % 7 + 1
    }
}

// Solution
// Because rand5() has only 5 possible outcomes, and we need 7 possible results 
//for rand7(), we need to call rand5() at least twice.

//When we call rand5() twice, we have 5*5=255∗5=25 possible outcomes. 
//If each of our 7 possible results has an equal chance of occurring, we'll need 
//each outcome to occur in our set of possible outcomes the same number of times. 
//So our total number of possible outcomes must be divisible by 7.

//25 isn't evenly divisible by 7, but 21 is. So when we get one of the last 4 
//possible outcomes, we throw it out and roll again.

//So we roll twice and translate the result into a unique outcomeNumber in the 
//range 1..25. If the outcomeNumber is greater than 21, we throw it out and re-roll. 
//If not, we mod by 7 (and add 1).

// Complexity
// Worst-case O(∞) time (we might keep re-rolling forever) and O(1) space.

// What We Learned
// As with the previous question about writing a rand5() function, the requirement to "return each integer with equal probability" is a real sticking point.

//Lots of candidates come up with clever O(1)-time solutions that they are so 
//sure about. But their solutions aren't actually uniform 
//(in other words, they're not truly random).

//In fact, it's impossible to have true randomness and non-infinite worst-case 
//runtime.