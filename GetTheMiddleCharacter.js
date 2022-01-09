// You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get 
// slightly more than 1000 in some test cases due to an error in the test cases). 
// You do not need to test for this. This is only here to tell you that you 
// do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

// Math.Floor(5.95) will return 5
// floor return number less than current number in integer format
function getTheMiddleCharacter(string) {
	const strlen = string.length
	if (strlen % 2 == 0) {
		return string[(strlen / 2) - 1] + string[strlen / 2]
	}
	return string[Math.floor(strlen / 2)]
}

// using slice method 
// slice will take two parameter as string index and does not
// return b raju.slice(1,3) will return aj 
function getTheMiddleCharacter1(string) {
	const middle = string.length / 2;
	return (string.length % 2) ? string.charAt(Math.floor(middle)) : string.slice(middle - 1, middle + 1);
}

console.log(getTheMiddleCharacter1('raju'))