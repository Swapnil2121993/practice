//You wrote a trendy new messaging app, MeshMessage, to get around flaky cell 
//phone coverage.
//Instead of routing texts through cell towers, your app sends messages via the 
//phones of nearby users, passing each message along from one phone to the 
//next until it reaches the intended recipient. 
//(Don't worry—the messages are encrypted while they're in transit.)

//Some friends have been using your service, and they're complaining that it 
//takes a long time for messages to get delivered. After some preliminary 
//debugging, you suspect messages might not be taking the most direct route 
//from the sender to the recipient.

//Given information about active users on the network, find the shortest route 
//for a message from one user (the sender) to another (the recipient). 
//Return an array of users that make up this route.

//There might be a few shortest delivery routes, all with the same length. 
//For now, let's just return any shortest route.

//Your network information takes the form of an object where keys are usernames 
//and values are arrays of other users nearby:

//   const network = {
//   'Min'     : ['William', 'Jayden', 'Omar'],
//   'William' : ['Min', 'Noam'],
//   'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
//   'Ren'     : ['Jayden', 'Omar'],
//   'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
//   'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//   'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
//   'Noam'    : ['Nathan', 'Jayden', 'William'],
//   'Omar'    : ['Ren', 'Min', 'Scott'],
//   ...
// };

//JavaScript
//For the network above, a message from Jayden to Adam should have this route:

//['Jayden', 'Amelia', 'Adam']

//Gotchas
//We can find the shortest route in O(N+M) time, where N is the number of users 
//and M is the number of connections between them.

//It's easy to write code that can get caught in an infinite loop for some inputs! 
//Does your code always finish running?

//What happens if there's no way for messages to get to the recipient?
//What happens if the sender tries to send a message to themselves?

//Breakdown
//Users? Connections? Routes? What data structures can we build out of that? 
//Let's run through some common ones and see if anything fits here.

//Arrays? Nope—those are a bit too simple to express our network of users.
//Objects? Maybeee.
//Graphs? ↴ Yeah, that seems like it could work!
//Let's run with graphs for a bit and see how things go. Users will be nodes 
//in our graph, and we'll draw edges between users who are close enough to 
//message each other.

//Our input object already represents the graph we want in adjacency list ↴ format. 
//Each key in the object is a node, and the associated value—an array of 
//connected nodes—is an adjacency list.

//One common graph storage format is called an adjacency list.

//In this format, every node has an array of connected neighbors: 
//an adjacency list. We could store these arrays in an object where the keys 
//represent the node and the values are the adjacency lists.

//For instance, here's one graph:

//An example graph composed of 4 labeled vertices.
//And, here's how we'd represent it using an object:

// const graph = {
//   0: [1],
//   1: [0, 2, 3],
//   2: [1, 3],
//   3: [1, 2],
// };

//JavaScript
//Since node 3 has edges to nodes 1 and 2, graph[3] has the adjacency list {1, 2}.

//Is our graph directed or undirected? ↴ Weighted or unweighted? ↴
//Graphs can be directed or undirected. In directed graphs, edges point from the 
//node at one end to the node at the other end. In undirected graphs, the edges 
//simply connect the nodes at each end.

//For directed vs. undirected, we'll assume that if Min can transmit a 
//message to Jayden, then Jayden can also transmit a message to Min. 
//Our sample input definitely suggests this is the case. 
//And it makes sense—they're the same distance from each other, 
//after all. That means our graph is undirected.

//What about weighted? We're not given any information suggesting that some 
//transmissions are more expensive than others, so let's say our graph is 
//unweighted.

//These assumptions seem pretty reasonable, so we'll go with them here. 
//But, this is a great place to step back and check in with your interviewer 
//to make sure they agree with what you've decided so far.

//Here's what our user network looks like as a graph:

//Okay, how do we start looking around our graph to find the shortest route from one 
//user to another?

//Or, more generally, how do we find the shortest path from a start node to an 
//end node in an unweighted, undirected graph?

//There are two common ways to explore undirected graphs: depth-first search (DFS)
// ↴ and breadth-first search (BFS). ↴

//Which do we want here?

//Since we're interested in finding the shortest path, BFS is the way to go.

//Remember: both BFS and DFS will eventually find a path if one exists. 
//The difference between the two is:

//BFS always finds the shortest path.
//DFS usually uses less space.
//Okay, so let's do a breadth-first search of our graph starting from the 
//sender and stopping when we find the recipient. Since we're using 
//breadth-first search, we know that the first time we see the recipient, 
//we'll have traveled to them along the shortest path.

//To code this up, let's start with a standard implementation of breadth-first search:

//It's a good idea to know breadth-first and depth-first search well enough to 
//quickly write them out. They show up in a lot of graph problems.

// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size property

// function bfs(graph, startNode, endNode) {

//   const nodesToVisit = new Queue();
//   nodesToVisit.enqueue(startNode);

//   // Keep track of what nodes we've already seen
//   // so we don't process them twice
//   const nodesAlreadySeen = new Set([startNode]);

//   while (nodesToVisit.size > 0) {
//     const currentNode = nodesToVisit.dequeue();

//     // Stop when we reach the end node
//     if (currentNode === endNode) {

//       // Found it!
//       break;
//     }

//     graph[currentNode].forEach(neighbor => {
//       if (!nodesAlreadySeen.has(neighbor)) {
//         nodesAlreadySeen.add(neighbor);
//         nodesToVisit.enqueue(neighbor);
//       }
//     });
//   }
// }

//Look at the nodesAlreadySeen set—that's really important and easy to forget. 
//If we didn't have it, our algorithm would be slower 
//(since we'd be revisiting tons of nodes) and it might never finish 
//(if there's no path to the end node).

//We're using a queue instead of an array because we want an efficient 
//first-in-first-out (FIFO) structure with O(1) inserts and removes. 
//If we used an array, appending would be O(1), but removing elements from the 
//front would be O(n).

//This seems like we're on the right track: we're doing a breadth-first search, 
//which gets us from the start node to the end node along the shortest path.

//But we're still missing an important piece: we didn't actually store our 
//path anywhere. We need to reconstruct the path we took. How do we do that?

//Well, we know that the first node in the path is startNode. And the next node 
//in the path is ... well ... hmm.

//Maybe we can start from the end and work backward? We know that the last node 
//in the path is endNode. And the node before that is ... hmm.

//We don't have enough information to actually reconstruct the path.

//What additional information can we store to help us?

//Well, to reconstruct our path, we'll need to somehow recover how we found 
//each node. When do we find new nodes?

//We find new nodes when iterating through currentNode's neighbors.

//So, each time we find a new node, let's jot down what currentNode was when 
//we found it. Like this:

// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size property

// function bfsGetPath(graph, startNode, endNode) {

//   const nodesToVisit = new Queue();
//   nodesToVisit.enqueue(startNode);

//   // Keep track of what nodes we've already seen
//   // so we don't process them twice
//   const nodesAlreadySeen = new Set([startNode]);

//   // Keep track of how we got to each node
//   // we'll use this to reconstruct the shortest path at the end
//   const howWeReachedNodes = {};
//   howWeReachedNodes[startNode] = null;

//   while (nodesToVisit.size > 0) {
//     const currentNode = nodesToVisit.dequeue();

//     // Stop when we reach the end node
//     if (currentNode === endNode) {

//       // Somehow reconstruct the path here
//       return path;
//     }

//     graph[currentNode].forEach(neighbor => {
//       if (!nodesAlreadySeen.has(neighbor)) {
//         nodesAlreadySeen.add(neighbor);
//         nodesToVisit.enqueue(neighbor);

//         // Keep track of how we got to this node
//         howWeReachedNodes[neighbor] = currentNode;
//       }
//     });
//   }
// }

//Great. Now we just have to take that bookkeeping and use it to reconstruct 
//our path! How do we do that?

//Let's start by looking up startNode in our object. Oops, it's just null.

//Oh. Right. Our object tells us which node comes before a given node on the 
//shortest path. And nothing comes before the start node.

//What about the endNode? If we look up the end node in howWeReachedNodes, 
//we'll get the node we were visiting when we found endNode. 
//That's the node that comes right before the end node along the shortest path!

//So, we'll actually be building our path backward from endNode to startNode.

//Going back to our example, to recover the shortest path from Min to Adam:

// We'd take this object we built up during our search:

//   {'Min'     : null,
//  'Jayden'  : 'Min',
//  'Ren'     : 'Jayden',
//  'Amelia'  : 'Jayden',
//  'Adam'    : 'Amelia',
//  'Miguel'  : 'Amelia',
//  'William' : 'Min'}

//JavaScript
//And, we'd use it to backtrack from the end node to the start node, 
//recovering our path:

//To get to Adam, we went through Amelia.
//To get to Amelia, we went through Jayden.
//To get to Jayden, we went through Min.
//Min is the start node.
//Chaining this together, the shortest path from Min to Adam is

//A path describing the shortest way to get from Min to Adam. We start with Min, 
//then move to Jayden, and then Amelia, finally reaching Adam.
//Here's what this could look like in code:

// Min -> Jayden -> Amelia -> Adam

//Here's what this could look like in code:

// function reconstructPath(howWeReachedNodes, startNode, endNode) {

//   const shortestPath = [];

//   // Start from the end of the path and work backwards
//   let currentNode = endNode;

//   while (currentNode !== null) {
//     shortestPath.push(currentNode);
//     currentNode = howWeReachedNodes[currentNode];
//   }

//   return shortestPath;
// }

//One small thing though. Won't this return a path that has the recipient at 
//the beginning?
//Oh. Since we started our backtracking at the recipient's node, our path is 
//going to come out backward. So, let's reverse it before returning it:
//return shortestPath.reverse(); // Now from startNode to endNode

// Okay. That'll work!

//But, before we're done, let's think about edge cases and optimizations.
//What are our edge cases, and how should we handle them?
//What happens if there isn't a route from the sender to the recipient?

//If that happens, then we'll finish searching the graph without ever 
//reconstructing and returning the path. That's a valid outcome—it just 
//means we can't deliver the message right now. So, if we finish our search 
//and haven't returned yet, let's return null to indicate that no path was found.

//What about if either the sender or recipient aren't in our user network?

//That's invalid input, so we should throw an exception.

//Any other edge cases?

//Those two should be it. So, let's talk about optimizations. 
//Can we make our algorithm run faster or take less space?

//One thing that stands out is that we have two data structures— nodesAlreadySeen 
//and howWeReachedNodes—that are updated in similar ways. In fact, every 
//time we add a node to nodesAlreadySeen, we also add it to howWeReachedNodes. 
//Do we need both of them?

//We definitely need howWeReachedNodes in order to reconstruct our path. 
//What about nodesAlreadySeen?

//Every node that appears in nodesAlreadySeen also appears in our object. 
//So, instead of keeping a separate set tracking nodes we've already seen, 
//we can just use the keys in howWeReachedNodes. This lets us get rid of 
//nodesAlreadySeen, which saves us O(n) space.

//Solution
//We treat the input user network as a graph in adjacency list ↴ format. 
//Then we do a breadth-first search ↴ from the sender, stopping once we reach 
//the recipient.

//In order to recover the actual shortest path from the sender to the recipient, 
//we do two things:

//during our breadth-first search, we keep track of how we reached each node, and
//after our breadth-first search reaches the end node, we use our object to 
//backtrack from the recipient to the sender.

//To make sure our breadth-first search terminates, we're careful to avoid 
//visiting any node twice. We could keep track of the nodes we've already seen 
//in a set, but, to save space, we reuse the object we've already set up for 
//recovering the path.

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size 

function reconstructPath(howWeReachedNodes, startNode, endNode){
    const reversedShortestPath = [];

    // Start from the end of the path and work backwards
    let currentNode = endNode;

    while(currentNode !== null) {
        reversedShortestPath.push(currentNode);
        currentNode = howWeReachedNodes[currentNode]
    }
    // Reverse our path to get the right order
    return reversedShortestPath.reverse() // No longer reversed
}

function bfs(graph, startNode, endNode) {

    if (!graph.hasOwnProperty(startNode)) {
        throw new Error('Start node not in graph!');
    }
    if (!graph.hasOwnProperty(endNode)) {
        throw new Error('End node not in graph!');
    }

    const nodesToVisit = new Queue();
    nodesToVisit.enqueue(startNode)

    // Keep track of how we got to each node
   // We'll use this to reconstruct the shortest path at the end
   // We'll ALSO use this to keep track of which nodes we've
   // already visited

   const howWeReachedNodes = {};
   howWeReachedNodes[startNode] = null;

   while(nodesToVisit.size > 0) {
       const currentNode = nodesToVisit.dequeue();
       // Stop when we reach the end node
       if(currentNode === endNode) {
           return reconstructPath(howWeReachedNodes, startNode, endNode)
       }
       graph[currentNode].forEach(neighbor => {
           if(!howWeReachedNodes.hasOwnProperty(neighbor)) {
               nodesToVisit.enqueue(neighbor);
               howWeReachedNodes[neighbor] = currentNode;
           }
       })
   }
    // If we get here, then we never found the end node
  // so there's NO path from startNode to endNode
  return null;
}

const graph = {
  'a': ['b', 'c', 'd'],
  'b': ['a', 'd'],
  'c': ['a', 'e'],
  'd': ['a', 'b'],
  'e': ['c'],
  'f': ['g'],
  'g': ['f']
};
console.log(bfs(graph, 'a', 'b'))

//Complexity
//Our solution has two main steps. First, we do a breadth-first search of the 
//user network starting from the sender. Then, we use the results of our 
//search to backtrack and find the shortest path.

//How much work is a breadth-first search?

//In the worst case, we'll go through the BFS loop once for every node in 
//the graph, since we only ever add each node to nodesToVisit once 
//(we check howWeReachedNodes to see if we've already added a node before). 
//Each loop iteration involves a constant amount of work to dequeue the node 
//and check if it's our end node. If we have n nodes, then this portion of 
//the loop is O(N).

//But there's more to each loop iteration: we also look at the current node's 
//neighbors. Over all of the nodes in the graph, checking the neighbors is 
//O(M), since it involves crossing each edge twice: once for each node at either 
//end.

//Putting this together, the complexity of the breadth-first search is O(N+M).

//BFS and DFS are common enough that it's often acceptable to just state 
//their complexity as O(N+M). Some interviewers might want you to derive it 
//though, so definitely be ready in case they ask.

//What about backtracking to determine the shortest path? Handling each 
//node in the path is O(1), and we could have at most N nodes in our shortest path. 
//So, that's O(N) for building up the path. Then, it's another O(N) to reverse it. 
//So, the total time complexity of our backtracking step is O(N).

//Putting these together, the time complexity of our entire algorithm is O(N+M).

//What about space complexity? The queue of nodes to visit, the mapping of 
//nodes to previous nodes, and the final path ... they all store a 
//constant amount of information per node. So, each data structure could 
//take up to O(N) space if it stored information about all of our nodes. 
//That means our overall space complexity is O(N).

//Bonus
//In our solution, we assumed that if one user (Min) could transmit a message to 
//another (Jayden), then Jayden would also be able to transmit a message to Min. 
//Suppose this wasn't guaranteed—maybe Min's cell phone transmits over shorter 
//distances than Jayden's. How would our graph change to represent this? Could 
//we still use BFS?

//What if we wanted to find the shortest path? Assume we're given a GPS location 
//for each user. How could we incorporate the distance between users into our 
//graph? How would our algorithm change?

//In our solution, we assumed that users never moved around. How could we 
//extend our algorithm to handle the graph changing over time?
//Our app's design has a formal name: a mesh network. In a mesh network, 
//data is sent from one node (here, a phone) to another directly, rather 
//than through intermediate devices (here, cell towers). Assuming enough devices 
//are in range, mesh networks provide multiple possible transmission paths, 
//making them reliable even if some devices have failed.

//What We Learned
//The tricky part was backtracking to assemble the path we used to reach our 
//endNode. In general, it's helpful to think of backtracking as two steps:

//Figuring out what additional information we need to store in order to rebuild 
//our path at the end (howWeReachedNodes, in this case).
//Figuring out how to reconstruct the path from that information.
//And in this case, something interesting happened after we added 
//howWeReachedNodes—it made nodesAlreadySeen redundant! So we were able to 
//remove it. A good reminder to always look through your variables at the 
//end and see if there are any you can cut out.