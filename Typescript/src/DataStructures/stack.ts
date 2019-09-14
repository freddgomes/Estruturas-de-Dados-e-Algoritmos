import { LinkedList } from "./linked-list";

// Last in, First out LIFO
export class Stack<T> {
    count: number = 0;
    list: LinkedList<T>;
    constructor() {
        this.list = new LinkedList<T>();
    }

    public push(value: T): void {
        this.list.insert(value, this.count);
        this.count++;
    }

    public pop(): void {
        this.list.removeAt(this.count - 1);
        this.count--;
    }

    public printStack(): string {
        return this.list!.printList();
    }
}

let stack: Stack<number> = new Stack<number>();
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