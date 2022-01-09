// algoexpert
// Time O(v+e) -> v number of node + e edges
// space O(v)

//output: [A,B,E,F,I,J,C,D,G,K,H]  -> from graph

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    // add node to array than call depth first search on it's children 
    // add them to array and repeat recursion
		array.push(this.name)
		for(const child of this.children) {
			child.depthFirstSearch(array)
		}
		return array
  }
}