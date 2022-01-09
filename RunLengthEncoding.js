// algoexpert
// "AAA" would return "3A"
// long run (runs of 10 or more character) should be encoded in a split fashion
//AAAAAAAAAAAA (12A) run should be encoded as "9A3A"

// O(n)time | O(n) space
function runLengthEncoding(string) {
  // Write your code here.
	const encodedStringCharacter = []
	let currentRunLength = 1;
	
	for(let i=1; i<string.length; i++) {
		const currentCharacter = string[i]
		const prevCharacter = string[i-1]
		
		if(currentCharacter !== prevCharacter || currentRunLength === 9) {
				encodedStringCharacter.push(currentRunLength.toString())
				encodedStringCharacter.push(prevCharacter)
				currentRunLength = 0 
		}
		currentRunLength++;
	}
	//Handle the last run
	encodedStringCharacter.push(currentRunLength.toString())
	encodedStringCharacter.push(string[string.length - 1])
	
	return encodedStringCharacter.join('')
}

console.log(runLengthEncoding('AAAAAAAAAAAABCCDE'))