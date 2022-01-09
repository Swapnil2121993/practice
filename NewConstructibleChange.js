
//Sample input: coins = [5,7,1,1,2,3,22]
// output: 20
// coin = [1,2,5]
// output = 4

// O(nlogn) time | O(1) space
function nonConstructibleChange(coins) {
  // Write your code here.
	coins.sort((a,b) => a - b)
	let currentChangeCreated = 0;
	
	for(const coin of coins) {
		if(coin > currentChangeCreated + 1) return currentChangeCreated + 1
		
		currentChangeCreated += coin
	}
  return currentChangeCreated + 1;
}

console.log(nonConstructibleChange([5,7,1,1,2,3,22]))