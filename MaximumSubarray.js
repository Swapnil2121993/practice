// Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//Follow up:
//If you have figured out the O(n) solution, try coding another solution using the 
// divide and conquer approach, which is more subtle.
//using Kadan's algorithem

function maxSubarray(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let maxCurrent = nums[0];
    let maxGlobal = nums[0]

    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i])

        if(maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent
        }
    }
    return maxGlobal
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))