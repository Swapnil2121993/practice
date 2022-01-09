//Best O(n^2) time | O(1) space
//average O(n^2) time | O(1) space
//worst O(n^2) time | O(1) space

//place index on first element
// start comparing with next element
// if next element is smaller change pointer to it and check whether any smaller
// number is there in the list
// if not than swap number and move start index to next element

function selectionSort(array) {
    // Write your code here.
      let startIndex = 0
      while(startIndex < array.length - 1) {
          let smallestIndex = startIndex
          for(let i = startIndex + 1; i < array.length; i++) {
              if(array[smallestIndex] > array[i]) smallestIndex = i
          }
          swap(startIndex, smallestIndex, array)
          startIndex++
      }
      return array
  }
  
  function swap(i, j, array) {
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
  }

const array = [8,5,2,9,5,6,3]
console.log(selectionSort(array))