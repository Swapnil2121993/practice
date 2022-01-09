// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.


var maximumWealth = function(accounts) {
    var max_wealth = 0;
    for(var i = 0; i < accounts.length; i++) {
        var runSum = 0;
        for(var j = 0; j < accounts[0].length; j++) {
            runSum += accounts[i][j];
        }
        if(runSum > max_wealth) {
            max_wealth = runSum;
        }
    }
    return max_wealth;
}

console.log(maximumWealth([[1,5],[7,3],[3,5]]))