///
////Q1

//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

class Elem{
    public int value;
    public int min;
    public int top = -1;
    public Elem next;
 
    public Elem(int value, int min){
        this.value = value;
        this.min = min;
    }
}

[5, 7, 8, 9, 0, 6]

[]
push -> 6

[5,7,8,9,0,2]

[1,2]

getMin()-> 0

getTop()-> 0


2,4,5
2,2,2


class Stack {
  constructor(item) {
    this.stack = []; //O(1)
    this.minStack = []
  }
  
  push(item) 
  if(stack.isEmpty()) {
    this.stack.push(item); //[4,5,6] -> [4,5] 
    this.minStack.push(item)
  }
   else {
      if(item < this.minStack.top()) {
        this.minStack.push(item)
      }
    
    
    this.push (item);
    top++;
    
  }
  
  pop(item) {                            [1,2,3]
    if (top ==-1)
    else {
     int popElement = arr[top]; 
     arr[top] = null;
     top--;
      return popElement;
      
    }
  }
  
  top() {
   return arr[top];
  }
  
  getMin(item) {
    const lastElement = arr[top]; // O(1)
    
  }