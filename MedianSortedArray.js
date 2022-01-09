// here are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity 
//should be O(log (m+n)).

var findMedianSortedArrays = function (nums1, nums2) {
    const result = nums1.concat(nums2)
    const sortedresult = result.sort((a, b) => a - b)
    if (sortedresult.length === 1) return sortedresult[0]
    else if (sortedresult.length % 2 === 0) {
        return (sortedresult[(sortedresult.length) / 2 - 1] + sortedresult[(sortedresult.length) / 2]) / 2
    } else {
        return sortedresult[Math.floor(sortedresult.length / 2)]
    }
};

console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5, 6]))