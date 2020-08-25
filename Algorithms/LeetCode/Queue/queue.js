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
// Simple Queue END ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Circular Queue ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
/** From LeetCode
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.head = -1 // it's position or index
  this.tail = -1 // it's position or index
  this.size = 0
  this.maxSize = k
}

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) { // if Queue is full can't add new member
    return false
  }
  
  if (this.isEmpty()) { // if Queue is empty set head and tail to 0
    this.tail = 0
    this.head = 0
  } else {
    this.tail += 1
  }

  this.size += 1
  this[this.tail] = value
  return true
}

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false
  }
  this[this.head] = null
  this.size -= 1
  
  if (!this.size) {
    this.head = null
    this.tail = this.head
  } else {
    if (this.head === this.maxSize) {
      this.head = 0
    } else {
      this.head += 1
    }
  }
  return true
}

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this[this.head]
}

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty()  ? -1 : this[this.tail]
}

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return !this.size
}

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.maxSize
}
// Circular Queue END ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Tasks from LeetCode Queue and BFS(Breadth-First-Search)––––––––––––––––––––––––––––––––––
// #1 task Number of Islands
/*
  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
  You may assume all four edges of the grid are all surrounded by water.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid === null || grid.length === 0) {
    return 0
  }

  let num = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        num += getIslandCount(grid, i, j)
      }
    }
  }

  return num
}
function getIslandCount (grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
    return 0;
  }

  grid[i][j] = '0';

  getIslandCount(grid, i + 1, j);
  getIslandCount(grid, i - 1, j);
  getIslandCount(grid, i, j + 1);
  getIslandCount(grid, i, j - 1);

  return 1;
}

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
] // answer = 1
const grid1 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
] // answer = 3

console.log(numIslands(grid))
console.log(numIslands(grid1))
// #1 task Number of Islands END
