// You have a singly-linked list ↴ and want to check if it contains a cycle.

// A singly-linked list is built with nodes, where each node has:

// node.next—the next node in the list.
// node.value—the data held in the node. For example, if our linked list stores people in 
// line at the movies, node.value might be the person's name.
// For example:

// class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

//A cycle occurs when a node’s next points back to a previous node in the list. 
//The linked list is no longer linear with a beginning and end—instead, 
//it cycles through a loop of nodes.

//Write a function containsCycle() that takes the first node in a singly-linked list 
//and returns a boolean indicating whether the list contains a cycle.

// Breakdown
// Because a cycle could result from the last node linking to the first node, we might 
//need to look at every node before we even see the start of our cycle again. 
//So it seems like we can’t do better than O(n) runtime.

// How can we track the nodes we’ve already seen?

// Using a set, we could store all the nodes we’ve seen so far. The algorithm is simple:

// If the current node is already in our set, we have a cycle. Return true.
// If the current node is null we've hit the end of the list. Return false.
// Else throw the current node in our set and keep going.
// What are the time and space costs of this approach? Can we do better?

//Our runtime is O(n), the best we can do. But our space cost is also O(n). 
//Can we get our space cost down to O(1) by storing a constant number of nodes?

function containsCycle(firstNode) {
    // Start both runners at the beginning
    let slowRunner = firstNode;
    let fastRunner = firstNode;

    // Until we hit the end of the list
    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // Case: fastRunner is about to "lap" slowRunner
        if (fastRunner === slowRunner) {
            return true;
        }
    }
    // Case: fastRunner hit the end of the list
    return false;
}

// Solution
// We keep two pointers to nodes (we'll call these “runners”), both starting at 
//the first node. Every time slowRunner moves one node ahead, fastRunner
// moves two nodes ahead.

// If the linked list has a cycle, fastRunner will "lap" (catch up with) slowRunner, 
//and they will momentarily equal each other.

// If the list does not have a cycle, fastRunner will reach the end.

// Complexity
// O(n) time and O(1) space.

// The runtime analysis is a little tricky. The worst case is when we do have a 
//cycle, so we don't return until fastRunner equals slowRunner. But how long 
//will that take?

//First, we notice that when both runners are circling around the cycle 
//fastRunner can never skip over slowRunner. Why is this true?

// Suppose fastRunner had just skipped over slowRunner. fastRunner would only be 1 
//node ahead of slowRunner, since their speeds differ by only 1. So we would have 
//something like this:

//   [ ] -> [s] -> [f]
// What would the step right before this "skipping step" look like? fastRunner 
//would be 2 nodes back, and slowRunner would be 1 node back. But wait, that 
//means they would be at the same node! So fastRunner didn't skip over slowRunner! 
// (is a proof by contradiction.)

// Since fastRunner can't skip over slowRunner, at most slowRunner will run around 
//the cycle once and fastRunner will run around twice. This gives us a runtime 
//of O(n).

// For space, we store two variables no matter how long the linked list is, 
//which gives us a space cost of O(1).

// Bonus
// How would you detect the first node in the cycle? Define the first node of 
//the cycle as the one closest to the head of the list.
// Would the program always work if the fast runner moves three steps every 
//time the slow runner moves one step?
// What if instead of a simple linked list, you had a structure where each node 
//could have several "next" nodes? This data structure is called a "directed graph." 
//How would you test if your directed graph had a cycle?

// What We Learned
// Some people have trouble coming up with the "two runners" approach. That's 
//expected—it's somewhat of a blind insight. Even great candidates might 
//need a few hints to get all the way there. And that's fine.

//Remember that the coding interview is a dialogue, and sometimes your 
//interviewer expects she'll have to offer some hints along the way.

//One of the most impressive things you can do as a candidate is listen to 
//a hint, fully understand it, a
//Don't be shy about showing lots of hnd take it to its next logical step.