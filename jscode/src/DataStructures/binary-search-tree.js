"use strict";
class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    toString() {
        return JSON.stringify(this);
    }
    equals(key) {
        return this.key == key;
    }
    lessThan(key) {
        return this.key < key;
    }
    biggerThan(key) {
        return this.key > key;
    }
}
export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(key) {
        if (this.root == null) {
            this.root = new BSTNode(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
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
    inOrderTraverse() {
        let listNode = new Array();
        this.inOrderTraverseNode(this.root, listNode);
        return listNode;
    }
    inOrderTraverseNode(node, listNode) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, listNode);
            listNode.push(node.key);
            this.inOrderTraverseNode(node.right, listNode);
        }
    }
    preOrderTraverse() {
        let listNode = new Array();
        this.inOrderTraverseNode(this.root, listNode);
        return listNode;
    }
    preOrderTraverseNode(node, listNode) {
        if (node != null) {
            listNode.push(node.key);
            this.inOrderTraverseNode(node.left, listNode);
            this.inOrderTraverseNode(node.right, listNode);
        }
    }
    postOrderTraverse() {
        let listNode = new Array();
        this.inOrderTraverseNode(this.root, listNode);
        return listNode;
    }
    postOrderTraverseNode(node, listNode) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, listNode);
            this.inOrderTraverseNode(node.right, listNode);
            listNode.push(node.key);
        }
    }
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        var current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (node.biggerThan(key)) {
            return this.searchNode(node.left, key);
        }
        else if (node.lessThan(key)) {
            return this.searchNode(node.right, key);
        }
        else {
            return true;
        }
    }
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (node.biggerThan(key)) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (node.lessThan(key)) {
            node.right = this.removeNode(node.right, key);
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
    printBST() {
        return this.root ? this.root.toString() : '';
    }
}

let binarySearchTree = new BinarySearchTree();
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
binarySearchTree.preOrderTraverse().forEach(x => {
    console.log(x);
});
console.log("post order traverse...\n");
binarySearchTree.postOrderTraverse().forEach(x => {
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