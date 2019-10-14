"use strict";
import { LinkedList } from "./linked-list";

export class Stack {
    constructor() {
        this.count = 0;
        this.list = new LinkedList();
    }
    push(value) {
        this.list.insert(value, this.count);
        this.count++;
    }
    pop() {
        this.list.removeAt(this.count - 1);
        this.count--;
    }
    printStack() {
        return this.list.printList();
    }
}
let stack = new Stack();
console.log("inserting values");
stack.push(1);
console.log(stack.printStack());
stack.push(2);
console.log(stack.printStack());
stack.push(3);
console.log(stack.printStack());
stack.push(4);
console.log(stack.printStack());
console.log("removing values");
stack.pop();
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());