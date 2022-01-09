// average: time O(logn) | space O(logn)
//worst: time O(n) | O(n) space

function findClosestValueInBst(tree, target) {
  // Write your code here.
	return findClosetstValueInBSTHelper(tree, target, tree.value)
}

function findClosetstValueInBSTHelper(tree, target, closest) {
	if(tree === null ) return closest
	if(Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value
	}
	if(target < tree.value) {
		return findClosetstValueInBSTHelper(tree.left, target, closest)
	} else if(target > tree.value) {
		return findClosetstValueInBSTHelper(tree.right, target, closest)
	} else {
		return closest
	}
}

// average: time O(logn) | space O(1)
//worst: time O(n) | O(1) space
function findClosestValueInBst1(tree, target) {
  // Write your code here.
	return findClosetstValueInBSTHelper(tree, target, tree.value)
}

function findClosetstValueInBSTHelper(tree, target, closest) {
	let currentNode = tree
	while(currentNode !== null) {
		if(Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
			closest = currentNode.value
		}
		if(target < currentNode.value) {
				currentNode = currentNode.left
		} else if(target > tree.value) {
				currentNode = currentNode.right
		} else {
			break;
		}
	}
	return closest
}



// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// {
//   "nodes": [
//     {"id": "10", "left": "5", "right": "15", "value": 10},
//     {"id": "15", "left": "13", "right": "22", "value": 15},
//     {"id": "22", "left": null, "right": null, "value": 22},
//     {"id": "13", "left": null, "right": "14", "value": 13},
//     {"id": "14", "left": null, "right": null, "value": 14},
//     {"id": "5", "left": "2", "right": "5-2", "value": 5},
//     {"id": "5-2", "left": null, "right": null, "value": 5},
//     {"id": "2", "left": "1", "right": null, "value": 2},
//     {"id": "1", "left": null, "right": null, "value": 1}
//   ],
//   "root": "10"
// }

// target: 12
// output 13
