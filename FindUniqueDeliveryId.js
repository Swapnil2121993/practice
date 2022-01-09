// Your company delivers breakfast via autonomous quadcopter drones. And something 
//mysterious has happened.

//Each breakfast delivery is assigned a unique ID, a positive integer. When one 
//of the company's 100 drones takes off with a delivery, the delivery's ID is 
//added to an array, deliveryIdConfirmations. When the drone comes back and lands, 
//the ID is again added to the same array.

//After breakfast this morning there were only 99 drones on the tarmac. One of 
//the drones never made it back from a delivery. We suspect a secret agent from 
//Amazon placed an order and stole one of our patented drones. To track them down, 
//we need to find their delivery ID.

// Given the array of IDs, which contains many duplicate integers and one unique 
//integer, find the unique integer.

// The IDs are not guaranteed to be sorted or sequential. Orders aren't always 
//fulfilled in the order they were received, and some deliveries get cancelled 
//before takeoff.

function findUniqueDeliveryId(deliveryIds) {
    const idToOccurences = new Map();

    deliveryIds.forEach(deliveryId => {
        if (idToOccurences.has(deliveryId)) {
            const newCount = idToOccurences.get(deliveryId) + 1;
            idToOccurences.set(deliveryId, newCount);
        } else {
            idToOccurences.set(deliveryId, 1)
        }
    })
    return [...idToOccurences.keys()].find(id => idToOccurences.get(id) === 1)
}
// You could use an object instead of a Map here if you wanted. The drawback 
//is that object keys must be strings or symbols, so our keys would be coerced 
//to strings (1 would become '1').

// Alright, we got our runtime down to O(n). That's probably the best runtime we 
//can get—to find our unique integer we’ll definitely have to look at every integer 
//in the worst case.

// But now we've added O(n) space, for our object. Can we bring that down?
// Well, we could use booleans ↴ as our values, instead of integers. If we 
//see an integer, we'll add it as a key in our object with a boolean value of true. 
//If we see it again, we'll change its value to false. At the end, 
//our non-repeated order ID will be the one integer with a value of true.

// How much space does this save us? Depends how our language stores booleans vs 
//integers. Often booleans take up just as much space as integers.

// And even if each boolean were just 1 bit, that'd still be O(n) space overall.

// So using booleans probably doesn't save us much space here. Any other ideas?

function findUniqueDeliveryId1(deliveryIds) {
    let uniqueDeliveryId = 0;

    deliveryIds.forEach(deliveryId => {
        uniqueDeliveryId ^= deliveryId
    });
    return uniqueDeliveryId
}

console.log(findUniqueDeliveryId1([1, 3, 4, 4, 3]))

// Solution
// We XOR ↴ all the integers in the array. We start with a variable 
//uniqueDeliveryId set to 0. Every time we XOR with a new ID, it will change 
//the bits. When we XOR with the same ID again, it will cancel out the earlier 
//change.

// In the end, we'll be left with the ID that appeared once!

// Complexity
// O(n) time, and O(1) space.

// What We Learned
// This problem is a useful reminder of the power we can unlock by knowing what's 
//happening at the "bit level."

// How do you know when bit manipulation might be the key to solving a problem? 
//Here are some signs to watch out for:

// You want to multiply or divide by 2 
//(use a left shift to multiply by 2, right shift to divide by 2).
// You want to "cancel out" matching numbers (use XOR).