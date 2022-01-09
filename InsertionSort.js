// best O(n) time | O(1) space
// Avg O(n^2) time | O(1) space
// worst O(n^2) time | O(1) space

// starts with index 1 and insert it in inplace sorted list
// swap element if it is less than previous element
function insertionSort(array) {
    // Write your code here.
      for(let i = 1; i<array.length; i++) {
          let j = i;
          while (j > 0 && array[j] < array[j - 1]) {
              swap(j, j-1, array)
              j -= 1
          }
      }
      return array
  }
  
  function swap(i, j, array) {
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
  }

const array = [8,5,2,9,5,6,3]
console.log(insertionSort(array))
  
  