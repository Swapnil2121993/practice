//algoexpert - medium 

//Write a function that takes array of integer and returns boolean representing
// whethere array is monotonic or not

// Array said monotonic if its element from left to right, are entirely non increasing 
// or entirely non decreasing 

// note that empty arrays and array of one element are monotonic

// input: array:[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
// output : true

// input: "array": [-1, -5, -10, -1100, -900, -1101, -1102, -9001]
// output: false

// O(n) time | O(1) space

function isMonotonic(array) {
  let isNonDecreasing = true
	let isNonIncreasing = true
	
	for(let i=1; i<array.length; i++) {
		if(array[i] < array[i-1]) isNonDecreasing = false
		if(array[i] > array[i-1]) isNonIncreasing = false
	}
	return isNonDecreasing || isNonIncreasing
}

// O(n) time | O(1) space
function isMonotonic1(array) {
	if(array.length <=2) return true
	
	let direction = array[1] - array[0]
	for(let i = 2; i<array.length; i++) {
		if(direction === 0) {
			direction = array[i] - array[i-1]
			continue
		}
		if(breakDirection(direction, array[i-1], array[i])) {
			return false
		}
	}
	return true
}

function breakDirection(direction, previousInt, currentInt) {
	const difference = currentInt - previousInt
	if (direction > 0) return difference < 0
	return difference > 0
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
console.log(isMonotonic1(array))