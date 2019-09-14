class BSTNode<T> {
    key: T;
    left: BSTNode<T> | null;
    right: BSTNode<T> | null;
    constructor(key: T) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    public toString(): string {
        return JSON.stringify(this);
    }

    public equals(key: T): boolean {
        return this.key == key;
    }
    public lessThan(key: T): boolean {
        return this.key < key;
    }
    public biggerThan(key: T): boolean {
        return this.key > key;
    }
}

export class BinarySearchTree<T>{
    root: BSTNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(key: T): void {
        if (this.root == null) {
            this.root = new BSTNode(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node: BSTNode<T>, key: T) {
        if (node.biggerThan(key) || node.equals(key)) {
            if (node.left == null) {
                node.left = new BSTNode(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else {
            if (node.right == null) {
                node.right = new BSTNode(key);
            }
            else {
                this.insertNode(node.right, key);
            }
        }
    }

    inOrderTraverse(): Array<T> {
        let listNode = new Array<T>();
        this.inOrderTraverseNode(this.root, listNode);
        return listNode;
    }
    inOrderTraverseNode(node: BSTNode<T> | null, listNode: T[]) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, listNode);
            listNode.push(node.key);
            this.inOrderTraverseNode(node.right, listNode);
        }
    }
    preOrderTraverse(): Array<T> {
        let listNode = new Array<T>();
        this.inOrderTraverseNode(this.root, listNode);
        return listNode;
    }
    preOrderTraverseNode(node: BSTNode<T> | null, listNode: T[]) {
        if (node != null) {
            listNode.push(node.key);
            this.inOrderTraverseNode(node.left, listNode);
            this.inOrderTraverseNode(node.right, listNode);
        }
    }
    postOrderTraverse(): Array<T> {
        let listNode = new Array<T>();
        this.inOrderTraverseNode(this.root, listNode);
        return listNode;
    }
    postOrderTraverseNode(node: BSTNode<T> | null, listNode: T[]) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, listNode);
            this.inOrderTraverseNode(node.right, listNode);
            listNode.push(node.key);
        }
    }

    min(): BSTNode<T> {
        return this.minNode(this.root!);
    }

    private minNode(node: BSTNode<T>): BSTNode<T> {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    max(): BSTNode<T> {
        return this.maxNode(this.root!);
    }

    private maxNode(node: BSTNode<T>): BSTNode<T> {
        var current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    public search(key: T): boolean {
        return this.searchNode(this.root!, key);
    }

    private searchNode(node: BSTNode<T>, key: T): boolean {
        if (node == null) {
            return false;
        }
        if (node.biggerThan(key)) {
            return this.searchNode(node.left!, key);
        }
        else if (node.lessThan(key)) {
            return this.searchNode(node.right!, key);
        }
        else {
            return true;
        }
    }

    public remove(key: T): void {
        this.root = this.removeNode(this.root!, key);
    }

    private removeNode(node: BSTNode<T> | null, key: T): BSTNode<T> | null {
        if (node == null) {
            return null;
        }
        if (node.biggerThan(key)) {
            node.left = this.removeNode(node.left!, key);
            return node;
        }
        else if (node.lessThan(key)) {
            node.right = this.removeNode(node.right!, key);
            return node;
        }
        else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            if (node.left == null) {
                node = node.right;
                return node;
            }
            else if (node.right == null) {
                node = node.left;
                return node;
            }

            var aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

    public printBST(): string {
        return this.root ? this.root.toString() : '';
    }
}

let binarySearchTree: BinarySearchTree<number> = new BinarySearchTree<number>();
binarySearchTree.insert(2.3);
binarySearchTree.insert(3.1);
binarySearchTree.insert(1.9);
binarySearchTree.insert(2.3);
binarySearchTree.insert(0.7);
binarySearchTree.insert(4.6);
console.log("Binary Search Tree...\n");
console.log(binarySearchTree.printBST());

console.log("in order traverse...\n");
binarySearchTree.inOrderTraverse().forEach(x => {
    console.log(x);
});

console.log("pre order traverse...\n");
binarySearchTree.preOrderTraverse().forEach(x =>{
    console.log(x);
});

console.log("post order traverse...\n");
binarySearchTree.postOrderTraverse().forEach(x =>{
    console.log(x);
});

console.log("min...\n");
console.log(binarySearchTree.min());
console.log("max...\n");
console.log(binarySearchTree.max());
console.log("searching 0.7...\n");
console.log(binarySearchTree.search(0.7));
console.log("searching 10...\n");
console.log(binarySearchTree.search(10));
console.log("searching 2.3...\n");
console.log(binarySearchTree.search(2.3));
console.log("searching 0.4...\n");
console.log(binarySearchTree.search(0.4));
console.log("searching -1...\n");
console.log(binarySearchTree.search(-1));
console.log("bst...\n");
console.log(binarySearchTree.printBST());
console.log("removing 0.7...\n");
binarySearchTree.remove(0.7);
console.log("bst...\n");
console.log(binarySearchTree.printBST());
console.log("removing 3.1...\n");
binarySearchTree.remove(3.1);
console.log("bst...\n");
console.log(binarySearchTree.printBST());