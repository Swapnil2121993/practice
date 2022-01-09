//My cake shop is so popular, I'm adding some tables and hiring wait staff so 
//folks can have a cute sit-down cake-eating experience.

//I have two registers: one for take-out orders, and the other for the other 
//folks eating inside the cafe. All the customer orders get combined into one 
//list for the kitchen, where they should be handled first-come, first-served.

//Recently, some customers have been complaining that people who placed orders 
//after them are getting their food first. Yikes—that's not good for business!

//To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

//The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
//he dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
//Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
//Given all three arrays, write a function to check that my service is first-come, 
//first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

//  Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

//   Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 3, 5, 4, 6]
// would be first-come, first-served.

//recursive solution which is not optimal 
//time and space complexity is O(n * n)
// for recursive function make sure to have base case for example if you are 
//summing n numbers than what if the number is <= 1

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    //base case
    if (servedOrders.length === 0) {
        return true
    }
    // if the first order in servedOrders is the same as the
    // first order in takeOutOrders
    // (making sure first that we have an order in takeOutOrders)

    if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {
        return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1))
    }
    // if the first order in servedOrders is the same as the first
    // in dineInOrders
    else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {
        return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1))
    }
    // first order in servedOrders doesn't match the first in
    // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
    else {
        return false
    }
}

//optimal solution with time and space complexity of O(n) and O(1)
// checking order directly from serverd order and match it whether order exsist
//in takeout or dineinorder or not 

function isFirstComeFirstServed1(takeOutOrder, dineInOrder, servedOrders) {
    var takeOutOrdersIndex = 0;
    var dineInOrdersIndex = 0;
    var takeOutOrderMaxIndex = takeOutOrder.length - 1;
    var dineInOrderMaxIndex = dineInOrder.length - 1;

    for (let i = 0; i < servedOrders.length; i++) {
        var order = servedOrders[i]

        // if we still have orders in takeOutOrders
        // and the current order in takeOutOrders is the same
        // as the current order in servedOrders
        if (takeOutOrdersIndex <= takeOutOrderMaxIndex &&
            order === takeOutOrder[takeOutOrdersIndex]) {
            takeOutOrdersIndex++
        }
        // if we still have orders in dineInOrders
        // and the current order in dineInOrders is the same
        // as the current order in servedOrders
        else if (dineInOrdersIndex <= dineInOrderMaxIndex &&
            order === dineInOrder[dineInOrdersIndex]) {
            dineInOrdersIndex++
        }
        // if the current order in servedOrders doesn't match the current
        // order in takeOutOrders or dineInOrders, then we're not serving first-come,
        // first-served
        else {
            return false
        }
    }
    // check for any extra orders at the end of takeOutOrders or dineInOrders
    if (dineInOrdersIndex != dineInOrder.length ||
        takeOutOrdersIndex != takeOutOrder.length) {
        return false
    }
    // all orders in servedOrders have been "accounted for"
    // so we're serving first-come, first-served!
    return true;
}

//What We Learned
//If you read the whole breakdown section, you might have noticed that our 
//recursive function cost us extra space. If you missed that part, go back and 
//take a look.

//Be careful of the hidden space costs from a recursive function's call stack! 
//If you have a solution that's recursive, see if you can save space by using an 
//iterative algorithm instead.

console.log(isFirstComeFirstServed1([1, 3, 5], [2, 4, 6], [1, 2, 3, 5, 4, 6]))