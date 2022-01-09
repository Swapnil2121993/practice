
// array: [ 2,1,2,4,5,6,2]
// toMove: 2
// ans: [1,4,5,6,2,2,2]

//O(n) time || O(1) space
function moveElementToEnd(array, toMove) {
  // Write your code here.
	let i = 0;
	let j = array.length - 1
	while( i< j) {
		while(i < j && array[j] === toMove) {
			j--
		}
			if(array[i] === toMove) {
				swap(i, j, array)
			}
			i++
	}
	return array
}

function swap(i, j, array) {
	const temp = array[j]
	array[j] = array[i]
	array[i] = temp
}
const array=[ 2,1,2,4,5,6,2]
const toMove = 2
console.log(console.log(MoveElmentToEnd(array, toMove)))


// using inplace, two pointer concept
// if j is equal to toMove move to the left
// if i is equal to toMove swap with j at the end
// inner while loop i<j imp to break the loop othewise it will swap
// again toMove = 2 and push 2 to the front