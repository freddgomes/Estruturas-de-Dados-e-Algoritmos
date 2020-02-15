function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    let root = null;

    this.insert = function (key) {
        let node = new Node(key);

        if (root === null) {
            root = node;
        }
        else{
            insertNode(root, node);
        }
    }
    this.insertNode = function (node, newNode) {
        
    }
}