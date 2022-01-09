/*
Suppose we have some input data describing a graph of 
relationships between parents and children over multiple 
generations. The data is formatted as a list of 
(parent, child) pairs, where each individual is assigned a 
unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, 
and 5 is a child of 4:

1   2    4
 \ /   / | \
  3   5  8  9
   \ / \     \
    6   7    11


Sample input/output (pseudodata):

parentChildPairs = [
    (1, 3), (2, 3), (3, 6), (5, 6),
    (5, 7), (4, 5), (4, 8), (4, 9), (9, 11)
]


Write a function that takes this data as input and returns 
two collections: one containing all individuals with zero 
known parents, and one containing all individuals with 
exactly one known parent.


Output may be in any order:

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4],       // Individuals with zero parents
  [5, 7, 8, 9, 11] // Individuals with exactly one parent
]

n: number of pairs in the input   {

}
*/
"use strict";


const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
];

[1,3],[2,3]

function findNodesWithZeroAndOneParents(parentChildPairs) {
  const parentChildPairObj = {};
  const zeroParentArray = [];
  const oneParentArray = []
  
  for (let i=0; i<parentChildPairs.length; i++) {
    for(let j=0; j<parentChildPairs[i].length; j++) {
      const value = parentChildPairs[i][j];
      if(!parentChildPairObj.hasOwnProperty(value)) {
          parentChildPairObj[value] = 1;
//           console.log('if', parentChildPairObj)
      }
      else {
        parentChildPairObj[value]++
//         console.log('else', parentChildPairObj)
      }
    }
  }
  
  for(let chars in parentChildPairObj) {
      if(parentChildPairObj[chars] === 1) {
         console.log('for-if', parentChildPairObj[chars])
        zeroParentArray.push(chars)
        console.log(zeroParentArray)
        
      }
    
      else {
        oneParentArray.push(chars)
        console.log('for-else',oneParentArray)
      }
  
  }
  
  return [zeroParentArray, oneParentArray]

}

findNodesWithZeroAndOneParents([
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
])