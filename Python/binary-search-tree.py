import json

class Node():
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def toJson(self):
        return json.dumps(self.value)

class BinarySreachTree():
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = Node(value)
        else:
            current = self.root
            while True:
                if value < current.value:
                    if current.left:
                        current = current.left
                    else: 
                        current.left = Node(value)
                        break
                elif value > current.value:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(value)
                        break
                else:
                    break
    def inorder(self, node):
        if node is not None:
            self.inorder(node.left)
            print(node.value)
            self.inorder(node.right)

    def preorder(self, node):
        if node is not None:
            print(node.value)
            self.preorder(node.left)
            self.preorder(node.right)
    def postorder(self, node):
        if node is not None:
            self.postorder(node.left)
            self.postorder(node.right)
            print(node.value)

def main(): 
    """ BST 
        4 
      2    6 
    1  3  5  7
              9

    """ 
    tree = BinarySreachTree() 

    array = [4, 2, 6, 1, 3, 7, 9, 5]
    for i in array: 
        tree.insert(i) 
    print(tree.root.toJson())
    print(tree.root.right.toJson())
    print(tree.root.right.left.toJson())
    print(tree.root.right.right.toJson())
    print(tree.root.right.right.right.toJson())
    print(tree.root.left.toJson())
    print(tree.root.left.left.toJson())
    print(tree.root.left.right.toJson())
    print("inorder traversal:")
    print(tree.inorder(tree.root))
    print("preorder traversal:")
    print(tree.preorder(tree.root))
    print("postorder traversal:")
    print(tree.postorder(tree.root))

if __name__ == '__main__': 
    main()
