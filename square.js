// Feature flags are used to toggle functionality for users. For example:

// if (featureFlag.getValue(user)) {
// // feature is enabled, do something different
// } else {
// // feature is disabled for user, default functionality
// }

// Implement Boolean Feature Flag
// Create a FeatureFlag with a getValue() method that takes in a user and returns a boolean.

// The flag should always return the same value for a given user.

// Implement Percentage Rollouts 
// Feature flags usually have the capability of percentage rollouts.
// For instance, let's say we want some new feature enabled for
// 1% of users, then 10%, then 50%–oh no we have a bug!–rollback to 0%.


class featureFlag {
  constructor() {
   this.getValue = this.getValue.bind(this) 
  }
  
  getValue(name) {  
    -inf to inf 
    return hash(name) % 100 < percentage 
    
  }
  
  setPercentage(percentage) {
    this.percentage = percentage 
  }
    
    100 users 
    50
  
  user1-user50 - true  
  0 user50-user100-> 25%
    
    
    
    
    
    const userDetails = new Set();
    let flag= true; 
    
    if(userDetails.has(name)) {
      flag = !flag
      userDetails.get(name, flag)
    }
    else {
      userDetails.add(name, flag)
    }
    
    return flag

  }
}

const flag = new featureFlag()
console.log(flag.getValue('swapnil'))
console.log(flag.getValue('swapnil'))
console.log(flag.getValue('swapnil'))
console.log(flag.getValue('swapnasdfil'))


true_counter = 0
flag.setPercentage(50)
 for i in range 10000:
  flag.getValue(user + i) user1-user50 -> true


flag.setPercentage(75) 75 new users to be true
    


// getValue('swapnil')
// getValue('swapnil')
// getValue('swapnil')




// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);