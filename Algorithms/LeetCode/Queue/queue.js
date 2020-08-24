// Simple Queue ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
class Queue {
  constructor () {
    this.elements = []
  }
  enqueue (e) {
    this.elements.push(e)
  }

  dequeue () {
    return this.elements.shift() // method shift() remove element from front of array
  }

  isEmpty () {
    return this.elements.length == 0
  }

  peek () {
    return this.isEmpty() ? undefined : this.elements[0]
  }

  length () {
    return this.elements.length
  }
}

let queue = new Queue()
for (let i = 1; i < 7; i++) {
  queue.enqueue(i)
}

console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.length())

while(!queue.isEmpty()) {
  console.log(queue.dequeue())
}
// Simple Queue ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Circular Queue ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
/** From LeetCode
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.head = -1;
  this.tail = -1;
  this.size = 0;
  this.maxSize = k;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false;
  }
  
  if (this.isEmpty()) {
    this.tail = 0;
    this.head = 0;
  } else {
    this.tail += 1;
  }

  this.size += 1;
  this[this.tail] = value;
  return true;
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  }
  this[this.head] = null;
  this.size -= 1;
  
  if (!this.size) {
    this.head = null;
    this.tail = this.head;
  } else {
    if (this.head === this.maxSize) {
      this.head = 0;
    } else {
      this.head += 1;
    }
  }
  return true;
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this[this.head];
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty()  ? -1 : this[this.tail];
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.maxSize;
};

