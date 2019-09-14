import { LinkedList } from "./linked-list";

// First in, First out FIFO
export class Queue<T> {
    count: number = 0;
    list: LinkedList<T>;
    constructor() {
        this.list = new LinkedList<T>();
    }

    public enqueue(value: T): void {
        this.list.insert(value, this.count);
        this.count++;
    }

    public dequeue(): void {
        if (this.count > 0) {
            this.list.removeAt(0);
            this.count--;
        }
    }

    public peek(): T {
        return this.list.getElementAt(0)!.value;
    }
    public printQueue() {
        return this.list.printList();
    }
}

let queue: Queue<string> = new Queue<string>();

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