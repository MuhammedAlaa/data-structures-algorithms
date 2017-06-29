/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

 */

import { Storage, createStorage } from './utils';

export class Queue<T> {
  
  private capacity: number;
  private storage: Storage<T>;
  private length: number;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
    this.storage = createStorage<T>();
    this.length = 0;
  }

  // O(1)
  public enqueue(value: T): number {
    if (this.length < this.capacity) {
      this.storage[this.length] = value;
      return ++this.length;
    } else {
      throw "Max capacity already reached. Remove element before adding a new one.";
      
    }
  }

  // O(1)
  public dequeue(): T {
    if (this.length > 0) {
      const value = this.storage[0];
      delete this.storage[0];
      this.length--;
      return value;
    }
  }

  // O(1)
  public peek(): T {
    if (this.length > 0) {
      return this.storage[0];
    }
  }

  // O(1)
  public size(): number {
    return this.length;
  }

  // O(n)
  public contains(value: T): boolean {
    return !!Object.keys(this.storage).find(key => this.storage[key] === value);
  }

  // O(n)
  public until(value: T): number {
    let numDequeues = 0;
    for(let i = 0; i < this.length; i++) {
      if (this.storage[i] === value) {
        return ++numDequeues;
      } else {
        numDequeues++;
      }
    }

    throw "Value does not exist in the Queue";
    
  }

}