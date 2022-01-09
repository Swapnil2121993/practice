// Bob is preparing to pass IQ test. The most frequent task in this test is to 
// find out which one of the given numbers differs from the others. 
// Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers, he needs a program that among the given 
// numbers finds one that is different in evenness, and return 
// a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means 
// indexes of the elements start from 1 (not 0)

//iqTest("2 4 7 8 10") => 3 
// Third number is odd, while the rest of the numbers are even

//iqTest("1 2 1 1") => 2 
// Second number is even, while the rest of the numbers are odd

// using indexOf method to find the index of given element in an array
// convert string into an array using split and than use parseInt to convert 
// string into number input

function iqTest(numbers) {
	numbers = numbers.split(' ').map(value => parseInt(value))
	let odd = numbers.filter(element => element % 2 !== 0)
	let even = numbers.filter(element => element % 2 === 0)
	return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1)
}

function iqTest1(numbers) {
	numbers = numbers.split(' ')
	let even = []
	let odd = []

	for (let i = 0; i < numbers.length; i++) {
		if (parseInt(numbers[i]) % 2 == 0) {
			even.push(i + 1)
		}
		else {
			odd.push(i + 1)
		}
	}
	return even.length === 1 ? even[0] : odd[0]
}

console.log(iqTest1("4, 6, 2, 8, 5"))

