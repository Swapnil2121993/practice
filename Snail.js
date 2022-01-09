// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// NOTE: The idea is not sort the elements from the lowest value to the highest; 
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside 
// an array [[]].

// algoexpert - medium difficulty
//O(n) time || O(n) space
function spiralTraverse(array) {
    // Write your code here.
      const result = [];
      let startRow = 0;
      let endRow = array.length - 1
      let startColumn = 0;
      let endColumn = array[0].length - 1
  
      while (startRow <= endRow && startColumn <= endColumn) {
          //first row
          for (let i = startColumn; i <= endColumn; i++) {
              result.push(array[startRow][i])
          }
          //right column
          for (let i = startRow + 1; i <= endRow; i++) {
              result.push(array[i][endColumn])
          }
          // BottomRow
          for (let i = endColumn - 1; i >= startColumn; i--) {
                          if (startRow === endRow) break;
              result.push(array[endRow][i])
          }
          // middle row
          for (let i = endRow -1; i > startRow; i--) {
                          if (startColumn === endColumn) break;
              result.push(array[i][startColumn])
          }
                  startRow++
                  endRow--
                  startColumn++
          endColumn--
      }
      return result
  }  

// need to understand
function snail1(array) {
    var vector = [];
    while (array.length) {
        vector.push(...array.shift());
        array.map(row => vector.push(row.pop()));
        array.reverse().map(row => row.reverse());
    }
    return vector;
}

console.log(spiralTraverse([
    [1,  2,  3],
    [12, 13, 4],
    [11, 14, 5],
    [10, 15, 6],
    [9,  8,  7],
  ]))