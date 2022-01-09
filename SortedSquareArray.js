
// array [ 1,2,3,4,5,6]
// output [1,4,9,16,25,36]
// O(nlogn) time | O(n) space

function sortedSquaredArray(array) {
	let result = []
	for(let i=0; i<array.length; i++) {
		const n = array[i]
		const squaredElement = n * n
		result.push(squaredElement)
	}
  // Write your code here.
  return result.sort((a,b) => a - b);
}

// O(n) time || O(n) space

function sortedSquaredArray(array) {
  // Write your code here.
	const sortedSquare = new Array(array.length).fill(0)
	let smallerValueIdx = 0
	let largerValueIdx = array.length - 1
	
	for(let i = array.length - 1; i >= 0; i--) {
		const smallerValue = array[smallerValueIdx]
		const largerValue = array[largerValueIdx]
		
		if (Math.abs(smallerValue) > Math.abs(largerValue)) {
			sortedSquare[i] = smallerValue * smallerValue
			smallerValueIdx++
		} else {
			sortedSquare[i] =  largerValue * largerValue
			largerValueIdx--
		}
	}
  return sortedSquare;
}

console.log(sortedSquaredArray([-7,-6,-4,1,4,7,8]))