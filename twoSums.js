// Given an array of integers, return indices of the two numbers such that they add 
//up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            console.log('---', comp[nums[i]])
            return [comp[nums[i]], i]
        }
        console.log('else', comp[target - nums[i]] = i)
        comp[target - nums[i]] = i
    }
    return comp
};

// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  // Write your code here.
	for(let i=0; i< array.length - 1; i++) {
		const firstNum = array[i]
		for(let j= i + 1; j < array.length; j++) {
			const secondNum = array[j]
			if(firstNum + secondNum === targetSum) {
				return [firstNum, secondNum]
			}
		}
	}
	return []
}

//O(n) time || O(n) space
function twoNumberSum(array, targetSum) {
// Write your code here.
if(array.length < 2) {
  return []
}
const seenNumber = {}
for(let i=0; i<array.length; i++) {
    if(seenNumber.hasOwnProperty(targetSum - array[i])) {
        return [targetSum - array[i], array[i]]
    } else {
        seenNumber[array[i]] = true
      }
    }
  return []
}

//O(nlogn) time || O(1) space 
function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a-b);
	let left = 0;
	let right = array.length - 1;
	while(left<right) {
		const currentSum = array[left] + array[right];
		if(currentSum === targetSum) {
			return [array[left], array[right]]
		} else if(currentSum < targetSum) {
			left++;
		} else if(currentSum > targetSum) {
			right--;
		}
	}
	return []
}

console.log(twoSums([1, 2, 3, 4], 6))