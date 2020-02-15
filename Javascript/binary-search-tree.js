function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    let root = null;

    this.insert = function (key) {
        let newNode = new Node(key);
        if (root == null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode);
        }
    }
    let insertNode = function (node, newNode) {
        if (node.key < newNode.key) {
            if (node.left == null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }
    }
    this.inOrderTraverse = function () {
        inOrderTraverseNode(root);
    }
    let inOrderTraverseNode = function (node) {
        if (node != null) {
            inOrderTraverseNode(node.left);
            console.log(node.key);
            inOrderTraverseNode(node.right);
        }
    }
    this.preOrderTraverse = function () {
        preOrderTraverseNode(root);
    }
    let preOrderTraverseNode = function (node) {
        if (node != null) {
            console.log(node.key);
            preOrderTraverseNode(node.left);
            preOrderTraverseNode(node.right);
        }
    }
    this.postOrderTraverse = function () {
        postOrderTraverseNode(root);
    }
    let postOrderTraverseNode = function (node) {
        if (node != null) {
            postOrderTraverseNode(node.left);
            postOrderTraverseNode(node.right);
            console.log(node.key);
        }
    }
    this.min = function () {
        return minNode(root);
    }
    let minNode = function (node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    this.max = function () {
        return maxNode(root);
    }
    let maxNode = function (node) {
        var current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    this.search = function (key) {
        return searchNode(root, key);
    }
    let searchNode = function (node, key) {
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return true;
        }
    }
    this.remove = function (key) {
        root = removeNode(root, key);
    }
    let removeNode = function (node, key) {
        if (node == null) {
            return null;
        }
        if (key, node.key) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = minNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
    this.printBST = function () {
        return root ? JSON.stringify(root) : '';
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
binarySearchTree.inOrderTraverse();
console.log("pre order traverse...\n");
binarySearchTree.preOrderTraverse();
console.log("post order traverse...\n");
binarySearchTree.postOrderTraverse();
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