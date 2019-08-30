class Node<T>
{
    public value: T;
    public next!: Node<T>;

    constructor(value: T) {
        this.value = value;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}

// usar equals em comparações, evitar ==
export class LinkedList<T>
{
    public head!: Node<T>;
    public length: number;
    public constructor() {
        this.length = 0;
    }

    public add(value: T): Node<T> {
        if (this.head == undefined) {
            this.head = new Node(value);
            this.length++;
            return this.head;
        }

        let node = this.head;
        while (node.next != undefined) {
            node = node.next;
        }
        node.next = new Node<T>(value);
        this.length++;
        return node.next;
    }

    public insert(value: T, index: number): void {
        if (index >= 0 && index <= this.length) {
            let node = new Node<T>(value);
            if (index == 0) {
                let current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                let previous = this.getElementAt(index - 1);
                let current = previous!.next;
                node.next = current;
                previous!.next = node;
            }
            this.length++;
        }
    }

    public removeAt(index: number): void {
        if (index >= 0 && index < this.length) {
            let currentNode = this.head;
            if (index === 0) {
                this.head = currentNode.next;
            }
            else {
                let previous!: Node<T>;
                for (var i = 0; i < index; i++) {
                    previous = currentNode;
                    currentNode = currentNode.next;
                }
                previous.next = currentNode.next;
            }
            this.length--;
        }
    }

    public remove(value: T): void {
        let index = this.indexOf(value);
        this.removeAt(index);
    }

    public indexOf(value: T): number {
        let current = this.head;
        for (var i = 0; i < this.length && current != undefined; i++) {
            if (current.value === value) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    public getElementAt(index: number): Node<T> | undefined{
        if (index >= 0 && index <= this.length) {
            let node: Node<T> = this.head;
            for (var i = 0; i < index && node != undefined; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    public printList(): string {
        return this.head ? this.head.toString() : '';
    }
}

let list = new LinkedList<number>();
console.log("insert value: 9");
list.add(9);
console.log("insert value: 4");
list.add(4);
console.log("insert value: 7");
list.add(7);
console.log("insert value: 3");
list.add(3);
console.log("insert value: 29");
list.add(29);
console.log("insert value: 14");
list.add(14);
console.log(list.printList());
console.log(list.length);
console.log("remove at: 2");
list.removeAt(2);
console.log(list.printList());
console.log(list.length);
console.log("remove at: 4");
list.removeAt(4);
console.log(list.printList());
console.log(list.length);
list.removeAt(4);
console.log(list.printList());
console.log(list.length);
console.log("remove at: -1");
list.removeAt(-1);
console.log(list.printList());
console.log(list.length);
list.removeAt(0);
console.log(list.printList());
console.log(list.length);
console.log("get element by index 0: ");
console.log(list.getElementAt(0)! ? list.getElementAt(0)!.toString() : undefined);
console.log("get element by index 2: ");
console.log(list.getElementAt(2)! ? list.getElementAt(2)!.toString() : undefined);
console.log("insert value 77 at index 1");
list.insert(77, 1);
console.log(list.printList());
list.add(1);
console.log(list.printList());
console.log("get index by value: 77");
console.log(list.indexOf(77));
console.log("get index by value: 17");
console.log(list.indexOf(17));
console.log("remove element 29");
list.remove(29);
console.log(list.printList());
console.log("remove element 9");
list.remove(9);
console.log(list.printList());
console.log("remove element 3");
list.remove(3);
console.log(list.printList());
