//O(nlogn) time || O(1) space

//Greedy algorithm problem

function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a,b) => a - b)
	
	let totalWaitingTime= 0
	for(let idx=0; idx<queries.length; idx++) {
		const duration = queries[idx]
		const queriesLeft = queries.length - (idx + 1)
		totalWaitingTime += duration * queriesLeft
	}
	return totalWaitingTime
}

console.log(minimumWaitingTime([3,2,1,2,6]))

//queries: [3,2,1,2,6]
// output: 17
