//Debug below code something is wrong with mergeSort function 
// and return merged sorted array

function merge(left, right) {
    let i=0;
    let j=0;
    const merged = []

    while(i<left.length && j<right.length) {
        if(right[j] < left[i]) {
            merged.push(right[i++])
        }
        else {
            merged.push(left[j++])
        }
    }
    return merged
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array
    }
    const middleIndex = Math.floor(array.length / 2)
    const left = array.slice(0, middleIndex)
    const right = array.slice(middleIndex, array.length)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([9,6,7,4,7,2,2,4,3,2,2,7]))

