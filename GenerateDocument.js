// algoexpert
// You are given a string of available characters. Write a function to determine whether
// you can generate the documents using available characters. if you can generate return 
// true otherwise return false

// you can only able to generate document if frequency of the unique characters in character
// string is greater than or equal to unique character of document string. if you are given
// character = 'abcabc' and document "aabbccc", you can not generate the document 
// because you are missing one c. 

// document can containe any special characters, space, number etc

// characters='Bste!hetsi ogEAxpelrt x'
// document = 'AlgoExpert is the Best!'
//returns true

// O(m*(n+m))) time | O(1)space - where n is the number of characters
// m is the length of the document

function generateDocument(characters, document) {
  // Write your code here.
	for(const character of document) {
		const documentFrequency = countCharacterFrequency(character, document)
		const charactersFrequency = countCharacterFrequency(character, characters)
		if (documentFrequency > charactersFrequency ) return false
	}
		return true;
}

function countCharacterFrequency(character, target) {
	let frequency = 0
	for(const char of target) {
		if(char === character) frequency++
	}
	return frequency
}



// O(c*(n+m))) time | O(c)space - where n is the number of characters, 
//m is the length of the document, and c is the number of unique characters
// in the document

function generateDocument1(characters, document) {
  // Write your code here.
	const alreadyCounted = new Set()
	for(const character of document) {
		if (character in alreadyCounted) continue;
		const documentFrequency = countCharacterFrequency(character, document)
		const charactersFrequency = countCharacterFrequency(character, characters)
		if (documentFrequency > charactersFrequency ) return false
		alreadyCounted.add(character)
	}
		return true;
}

function countCharacterFrequency(character, target) {
	let frequency = 0
	for(const char of target) {
		if(char === character) frequency++
	}
	return frequency
}

//O(n+m) time | O(c) space - where n is the number of characters, m is 
// the length of the document,c is the number of unique characters
// in the document
function generateDocument2(characters, document) {
  // Write your code here.
	const characterCounts = {}
	
	for(const character of characters) {
		if(!(character in characterCounts)) characterCounts[character] = 0;
		
		characterCounts[character]++
	}
 
	for(const character of document) {
		if(!(character in characterCounts) || characterCounts[character] === 0) return false
		
		characterCounts[character] --
	}
	return true
}

const character1='Bste!hetsi ogEAxpelrt x '
const document1 = 'AlgoExpert is the Best!'

console.log(generateDocument2(character1, document1))