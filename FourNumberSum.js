//Average: O(n^2) time | O(n^2) space
//Worst: O(n^3) time | O(n^2) space

function fourNumberSum(array, targetSum) {
  // Write your code here.
	const allPairSum = {}
	const quadruplets = []
	for(let i = 1; i<array.length - 1; i++) {
		for(let j = i+1; j<array.length; j++) {
			const currentSum = array[i] + array[j]
			const difference = targetSum - currentSum
			 if(difference in allPairSum) {
				 for(const pair of allPairSum[difference]) {
					quadruplets.push(pair.concat([array[i], array[j]]))
			 	}
			}
		}
		for (let k=0; k<i; k++) {
			const currentSum = array[i] + array[k]
			if(!(currentSum in allPairSum)) {
				allPairSum[currentSum] = [[array[k], array[i]]]
			} else {
				allPairSum[currentSum].push([array[k], array[i]])
			}
		}
	}
return quadruplets
}

console.log(fourNumberSum([7,6,4,-1,1,2], 16))

// starts from second element as first and last element won't produce any pair of quadruplets
// iterate forward and backward using for loop
// for forward for loop, if difference is there in object thn push pairs in to object
// otherwise skip to next number 
// for backward if sum of pairs is not there in object thn create an entry 
// otherwise push paris into exsisting key 

// worst case scenario when array like [-4,-3,-2,-1,1,2,3,4] and targetSum 0 than each
// pair will be added and need to be traversed