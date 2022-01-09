     20 (0)
    /  \
  10(1)    30(1)
       /  \
     (2) 5    40(2)

    // answer = 0 + 1 + 1 + 2 + 2 = 6

// O(n) time | O(h) space
function nodeDepths(root) {
  // Write your code here.
	let sumOfDepths = 0;
	const stack = [{ node: root, depth: 0}]
	
	while(stack.length) {
		const { node, depth } = stack.pop()
		if(node === null) continue;
		sumOfDepths += depth
		stack.push({ node: node.left, depth: depth + 1 })
		stack.push({ node: node.right, depth: depth + 1})
	}
	return sumOfDepths
}

// Recursive
// O(n) time | O(h) space
function nodeDepths(root, depth = 0) {
  // Write your code here.
	if(root === null ) return 0
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}