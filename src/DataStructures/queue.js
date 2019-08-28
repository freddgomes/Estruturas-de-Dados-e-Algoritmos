"use strict";
import { LinkedList } from "./linked-list";
class Queue {
    constructor() {
        this.count = 0;
        this.list = new LinkedList();
    }
    enqueue(value) {
        this.list.insert(value, this.count);
        this.count++;
    }
    dequeue() {
        if (this.count > 0) {
            this.list.removeAt(0);
            this.count--;
        }
    }
    peek() {
        return this.list.getElementAt(0).value;
    }
    printQueue() {
        return this.list.printList();
    }
}
const _Queue = Queue;
export { _Queue as Queue };
let queue = new Queue();
console.log("enqueue");
queue.enqueue("element 1");
console.log("enqueue");
queue.enqueue("element 2");
console.log("enqueue");
queue.enqueue("element 3");
console.log("enqueue");
queue.enqueue("element 4");
console.log(queue.printQueue());
console.log("get first: ");
console.log(queue.peek());
console.log("dequeue");
queue.dequeue();
console.log(queue.printQueue());
console.log("get first: ");
console.log(queue.peek());
console.log("dequeue");
queue.dequeue();
console.log(queue.printQueue());
console.log("get first: ");
console.log(queue.peek());
console.log("dequeue");
queue.dequeue();
console.log(queue.printQueue());
console.log("get first: ");
console.log(queue.peek());
console.log("dequeue");
queue.dequeue();
console.log(queue.printQueue());
queue.dequeue();
console.log(queue.printQueue());