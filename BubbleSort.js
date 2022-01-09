// algo expert
// best O(n) time | O(1) space
// Avg O(n^2) time | O(1) space
// worst O(n^2) time | O(1) space

// compare first element with next element it is not in order than swap element
// and run same until all elements arrange in right place
// no need to touch last element once it is place as it is not going to move
// that's why counter in place which will reduce iteration and not include last element


function bubbleSort(array) {
    // Write your code here.
      let isSorted = false
      let counter = 0
      
      while(!isSorted) {
          isSorted = true
          for(let i=0; i < array.length - 1 - counter; i++) {
              if (array[i] > array[i+1]) {
                  swap(i, i + 1, array);
                  isSorted = false
              }
          }
          
          counter++
      }
      return array
  }
  
  function swap(i, j, array) {
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
  }

const array = [8,5,2,9,5,6,3]
console.log(bubbleSort(array))