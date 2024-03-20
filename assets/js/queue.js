/** 
 Author : Build Rise Shine 

Created : 2023 

Script : Queue 

Description : Implementation of Queue Data Structure

  The Queue class represents a custom implementation of a queue data structure in JavaScript. 
  It provides methods to perform basic queue operations, such as adding elements to the back of 
  the queue (enqueue) and removing elements from the front of the queue (dequeue). 
  
  The queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, 
  meaning the first element added to the queue will be the first one to be removed. The example 
  demonstrates how to create an instance of the Queue class and perform enqueue and dequeue 
  operations on it.
  
(c) Copyright by BRS Studio. 
**/

// Class for creating a Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class for Queue
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // add
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // remove
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  // view frontmost
  peek() {
    if (this.length === 0) return undefined;
    return this.first.value;
  }

  // Check whether the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the number of elements in the queue
  size() {
    return this.length;
  }
}

// Implementation
let myQueue = new Queue(11);
myQueue.enqueue(3);
myQueue.enqueue(23);
myQueue.enqueue(7);

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.peek());
console.log(myQueue.size());
console.log(myQueue);

