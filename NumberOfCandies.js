//leetcode

//There are n kids with candies. You are given an integer array 
//candies, where each candies[i] represents the number of 
//candies the ith kid has, and an integer extraCandies, 
//denoting the number of extra candies that you have.

//Return a boolean array result of length n, where result[i] is 
//true if, after giving the ith kid all the extraCandies, they 
//will have the greatest number of candies among all the kids, 
//or false otherwise.

//Note that multiple kids can have the greatest number of candies.

//Example 1
//Input: candies = [2,3,5,1,3], extraCandies = 3
//Output: [true,true,true,false,true] 
//Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

function kidsWithCandies (candies, extraCandies) {
  const candiesCopy = JSON.parse(JSON.stringify(candies))
  const sortedCandies = candiesCopy.sort((a,b) => b -a)
  const maxElement = sortedCandies[0]
  let result = []

  for(let i=0; i< candies.length; i++) {
      let sum = candies[i] + extraCandies
      if(sum >= maxElement) {
          result.push(true)
          continue;
      }
      result.push(false)
  }
  return result
};

console.log(kidsWithCandies([2,3,5,1,3],3))

var kidsWithCandies = function(candies, extraCandies) {
    let arr = [];
    candies.forEach((el,index) => el+extraCandies >= Math.max(...candies) ? arr.push(true) : arr.push(false));
    return arr;
};