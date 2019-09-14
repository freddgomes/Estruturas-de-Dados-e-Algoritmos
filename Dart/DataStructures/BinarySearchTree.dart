import 'dart:core';

class BstNode<T> {
  T key;
  BstNode<T> left;
  BstNode<T> right;

  BstNode(T value) {
    key = value;
    left = null;
    right = null;
  }

  Map<String, dynamic> toJson() => _nodeToJson(this);

  Map<String, dynamic> _nodeToJson(BstNode instance) => <String, dynamic>{
        'key': instance.key,
        'left': instance.left?.toJson(),
        'right': instance.right?.toJson()
      };

// adicionar verificacao para saber se valores sao de tipos comparaveis
  bool equals(T key) {
    return this.key == key;
  }

  bool lessThan(T key) {
    return (this.key as double) < (key as double);
  }

  bool biggerThan(T key) {
    return (this.key as double) > (key as double);
  }
}

class BinarySearchTree<T> {
  BstNode<T> root;

  BinarySearchTree() {
    this.root = null;
  }

  void insert(T key) {
    if (this.root == null) {
      this.root = new BstNode<T>(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  void insertNode(BstNode<T> node, T key) {
    if (node.biggerThan(key)) {
      if (node.left == null) {
        node.left = new BstNode<T>(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new BstNode<T>(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  List<T> inOrderTraverse() {
    var listNode = new List<T>();
    this.inOrderTraverseNode(this.root, listNode);
    return listNode;
  }

  void inOrderTraverseNode(BstNode<T> node, List<T> listNode) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, listNode);
      listNode.add(node.key);
      this.inOrderTraverseNode(node.right, listNode);
    }
  }

  List<T> preOrderTraverse() {
    var listNode = new List<T>();
    this.preOrderTraverseNode(this.root, listNode);
    return listNode;
  }

  void preOrderTraverseNode(BstNode<T> node, List<T> listNode) {
    if (node != null) {
      listNode.add(node.key);
      this.preOrderTraverseNode(node.left, listNode);
      this.preOrderTraverseNode(node.right, listNode);
    }
  }

  List<T> postOrderTraverse() {
    var listNode = new List<T>();
    this.postOrderTraverseNode(this.root, listNode);
    return listNode;
  }

  void postOrderTraverseNode(BstNode<T> node, List<T> listNode) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, listNode);
      this.postOrderTraverseNode(node.right, listNode);
      listNode.add(node.key);
    }
  }

  BstNode<T> min() {
    return this.minNode(this.root);
  }

  BstNode<T> minNode(BstNode<T> node) {
    var current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  BstNode<T> max() {
    return maxNode(this.root);
  }

  BstNode<T> maxNode(BstNode<T> node) {
    var current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  bool search(T key) {
    return searchNode(this.root, key);
  }

  bool searchNode(BstNode<T> node, T key) {
    if (node == null) {
      return false;
    }
    if (node.biggerThan(key)) {
      return searchNode(node.left, key);
    } else if (node.lessThan(key)) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }

  void remove(T key) {
    this.root = this.removeNode(this.root, key);
  }

  BstNode<T> removeNode(BstNode<T> node, T key) {
    if (node == null) {
      return null;
    }
    if (node.biggerThan(key)) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (node.lessThan(key)) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      var aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }

   void printBST() {
    print(this.root?.toJson());
  }
}

void main(List<String> args) { 

BinarySearchTree<double> binarySearchTree = new BinarySearchTree<double>();
binarySearchTree.insert(2.3);
binarySearchTree.insert(3.1);
binarySearchTree.insert(1.9);
binarySearchTree.insert(2.3);
binarySearchTree.insert(0.7);
binarySearchTree.insert(4.6);
print("Binary Search Tree...\n");
binarySearchTree.printBST();

print("in order traverse...\n");
for (var x in binarySearchTree.inOrderTraverse()) {  
    print(x);
}

print("pre order traverse...\n");

for (var x in binarySearchTree.preOrderTraverse()) {  
    print(x);
}

print("post order traverse...\n");
for (var x in binarySearchTree.postOrderTraverse()) {  
    print(x);
}

print("min...\n");
print(binarySearchTree.min().toJson());
print("max...\n");
print(binarySearchTree.max().toJson());
print("searching 0.7...\n");
print(binarySearchTree.search(0.7));
print("searching 10...\n");
print(binarySearchTree.search(10));
print("searching 2.3...\n");
print(binarySearchTree.search(2.3));
print("searching 0.4...\n");
print(binarySearchTree.search(0.4));
print("searching -1...\n");
print(binarySearchTree.search(-1));
print("bst...\n");
binarySearchTree.printBST();
print("removing 0.7...\n");
binarySearchTree.remove(0.7);
print("bst...\n");
binarySearchTree.printBST();
print("removing 3.1...\n");
binarySearchTree.remove(3.1);
print("bst...\n");
binarySearchTree.printBST();
}