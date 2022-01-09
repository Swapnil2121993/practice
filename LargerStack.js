// You want to be able to access the largest element in a stack. ↴

// You've already implemented this Stack class:

//Use your Stack class to implement a new class MaxStack with a method 
//getMax() that returns the largest element in the stack. getMax() should 
//not remove the item.

// Your stacks will contain only integers

class Stack {
    constructor() {

        // Initialize an empty stack
        this.items = [];
    }

    // Push a new item onto the stack
    push(item) {
        this.items.push(item);
    }

    // Remove and return the last item
    pop() {

        // If the stack is empty, return null
        // (It would also be reasonable to throw an exception)
        if (!this.items.length) {
            return null;
        }
        return this.items.pop();
    }

    // Returns the last item without removing it
    peek() {
        if (!this.items.length) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

class MaxStack {
    constructor() {
        this.stack = new Stack();
        this.maxesStack = new Stack();
    }

    push(item) {
        this.stack.push(item)
        if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
            this.maxesStack.push(item)
        }
    }

    pop() {
        const item = this.stack.pop();
        if (item === this.maxesStack.peek()) {
            this.maxesStack.pop()
        }
        return item
    }

    getMax() {
        return this.maxesStack.peek()
    }
}

const item = new MaxStack()
item.push(1)
item.push(5)
item.push(3)
item.pop()
const max = item.getMax()
console.log('---', max)

// Breakdown
// A just-in-time ↴ approach is to have getMax() simply walk through the stack 
//(popping all the elements off and then pushing them back on) to find the max 
//element. This takes O(n) time for each call to getMax(). But we can do better.

// To get O(1) time for getMax(), we could store the max integer as a member 
//variable (call it max). But how would we keep it up to date?

//For every push(), we can check to see if the item being pushed is larger 
//than the current max, assigning it as our new max if so. But what happens 
//when we pop() the current max? We could re-compute the current max by walking 
//through our stack in O(n) time. So our worst-case runtime for pop() would be O(n). 
//We can do better.

//What if when we find a new current max (newMax), instead of overwriting the 
//old one (oldMax) we held onto it, so that once newMax was popped off our stack 
//we would know that our max was back to oldMax?

//What data structure should we store our set of maxes in? We want something 
//where the last item we put in is the first item we get out ("last in, first out").

// We can store our maxes in another stack!

// Solution
// We define two new stacks within our MaxStack class—stack holds all of our 
//integers, and maxesStack holds our "maxima." We use maxesStack to keep our 
//max up to date in constant time as we push() and pop():

// Whenever we push() a new item, we check to see if it's greater than or equal to 
//the current max, which is at the top of maxesStack. If it is, we also push() 
//it onto maxesStack.
//Whenever we pop(), we also pop() from the top of maxesStack if the item equals 
//the top item in maxesStack.

// Complexity
// O(1)time for push(), pop(), and getMax(). O(m) additional space, 
//where m is the number of operations performed on the stack.

// What We Learned
// Notice how in the solution we're spending time on push() and pop() 
//so we can save time on getMax(). That's because we chose to optimize for the 
//time cost of calls to getMax().

// But we could've chosen to optimize for something else. For example, if we 
//expected we'd be running push() and pop() frequently and running getMax() rarely, 
//we could have optimized for faster push() and pop() methods.

// Sometimes the first step in algorithm design is deciding what we're 
//optimizing for. Start by considering the expected characteristics of the input.