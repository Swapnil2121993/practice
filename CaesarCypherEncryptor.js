//algoexpert

//string: 'xyz'
//key = 2

//output: 'zab'

// O(n) time | O(n) space
// function caesarCipherEncryptor(string, key) {
//   // Write your code here.
// 	const newLetters = []
// 	const newKey = key % 26
// 	for (const letter of string) {
// 		newLetters.push(getNewLetter(letter, newKey))
// 	}
// 	return newLetters.join('')
// }

// function getNewLetter(letter, key) {
// 	const newLetterCode = letter.charCodeAt() + key
// 	return newLetterCode <=122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
// }

// O(n) time | O(n) space
function caesarCipherEncryptor1(string, key) {
  // Write your code here.
	const newLetter = []
	const newKey = key % 26
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	for(const letter of string) {
		newLetter.push(getNewLetter(letter, newKey, alphabet))
	}
	return newLetter.join('')
}

function getNewLetter(letter, key, alphabet) {
	const newLetterCode = alphabet.indexOf(letter) + key
	return alphabet[newLetterCode % 26]
}

console.log(caesarCipherEncryptor1('xyz', 2))


// For Solution 2 of this problem, in the video explanation, we update the  newLetterCode with the following formula if it's greater than  25:

// -1 + newLetterCode % 25
// This logic is actually flawed, because if  
//newLetterCode % 25 happens to be equal to 0, 
//then we'll be accessing a letter in the alphabet 
//at index  -1, which will throw an error in a lot 
//of languages or simply return an incorrect answer 
//in other languages.

// For example, this edge-case issue will occur with these inputs:

// string = "z"
// key = 25
// Instead, we need to use the following formula if the  newLetterCode is greater than 25:

// newLetterCode % 26
//  Why isn't this an issue in Solution 1?

// In Solution 1, our formula is:

// 96 + newLetterCode % 122
// Since we only actually apply this formula if 
//newLetterCode is greater than 122, and since 
//the key that's used to initially compute  
//newLetterCode is always less than 26 (because 
//it's modded by 26 at the beginning of the algorithm), 
//we know that  newLetterCode % 122 will never be 
//equal to 0 (newLetterCode will always be between 123 
//and 147).

// Thus, we'll never compute a character from the char 
//code 96, which would be equivalent to accessing a 
//letter at index -1 in Solution 2.