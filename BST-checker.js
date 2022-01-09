//Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

//Here's a sample binary tree node class:

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }

    isBinarySearchTree(treeroot) {

        // Start at the root, with an arbitrarily low lower bound
        // and an arbitrarily high upper bound

        const nodeAndBoundStack = [];

        nodeAndBoundStack.push({
            node: treeroot,
            lowerBound: Number.NEGATIVE_INFINITY,
            upperBound: Number.POSITIVE_INFINITY

        })

        // Depth-first traversal
        while (nodeAndBoundStack.length) {

            const { node, lowerBound, upperBound } = nodeAndBoundStack.pop()

            // If this node is invalid, we return false right away
            if (node.value <= lowerBound || node.value >= upperBound) {
                return false
            }

            if (node.left) {

                // This node must be less than the current node
                nodeAndBoundStack.push({
                    node: node.left,
                    lowerBound,
                    upperBound: node.value
                })
            }

            if (node.right) {
                // This node must be greater than the current node
                nodeAndBoundStack.push({
                    node: node.right,
                    lowerBound: node.value,
                    upperBound
                })
            }
        }
        return true
    }
}

var bst = new BinaryTreeNode([]);
console.log(bst.isBinarySearchTree([50, 30, 20, 10, 70, 80, 90]))

// Instead of allocating a stack ↴ ourselves, we could write a recursive 
//function that uses the call stack. ↴ This would work, but it would be 
//vulnerable to stack overflow. However, the code does end up quite a bit cleaner:

function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
    lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
    upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;

    if (!treeRoot) return true;

    if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
        return false;
    }

    return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value)
        && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}

// O(n) time | O(d) space
function validateBst(tree) {
  // Write your code here.
	return validateBstHelper(tree, -Infinity, Infinity )
}

function validateBstHelper(tree, minValue, maxValue) {
	if(tree === null) return true
	if(tree.value < minValue || tree.value >= maxValue) return false
	
	const leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
	return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
}



//Checking if an in-order traversal of the tree is sorted is a great answer too, 

// Complexity
// O(n) time and O(n) space.

//question on lowerbound and upper bound