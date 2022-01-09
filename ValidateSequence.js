// O(n) time || O(1) space whenre n is the length of the array

function isValidSubsequence(array, sequence) {
  // Write your code here.
	 let seqIdx = 0
	 for(const value of array) {
		 if(seqIdx === sequence.length) break;
		 if(sequence[seqIdx] === value) seqIdx++
	}
	return seqIdx === sequence.length
}

// O(n) time || O(1) space whenre n is the length of the array

function isValidSubsequence1(array, sequence) {
  // Write your code here.
	let seqIdx = 0,
	    arrIdx = 0
	while(arrIdx < array.length && seqIdx < sequence.length) {
		if(sequence[seqIdx] === array[arrIdx]) {
				seqIdx++
		}
		arrIdx++
	}
	return seqIdx === sequence.length
}

// Sample Input
// array: [5,1,22,25,6,-1,8,10]
// sequence: [1,6,-1,10]
// output true

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10]))