using System;

namespace DSA
{
    internal class Node
    {
        public int Key { get; set; }
        public Node Left { get; set; }
        public Node Right { get; set; }

        internal Node(int key)
        {
            Key = key;
        }


        public override string ToString()
        {
            return "Node{" +
                    "key=" + Key +
                    ", left=" + Left +
                    ", right=" + Right +
                    '}';
        }
    }

    public class BinarySearchTree
    {
        private Node root;
        public BinarySearchTree()
        {
        }
        public void Insert(int key)
        {
            var node = new Node(key);
            if (root == null)
            {
                root = node;
            }
            else
            {
                InsertNode(root, node);
            }
        }

        private void InsertNode(Node node, Node newNode)
        {
            if (newNode.Key < node.Key)
            {
                if (node.Left == null)
                {
                    node.Left = newNode;
                }
                else
                {
                    InsertNode(node.Left, newNode);
                }
            }
            else
            {
                if (node.Right == null)
                {
                    node.Right = newNode;
                }
                else
                {
                    InsertNode(node.Right, newNode);
                }
            }
        }
        public void InOrderTraverse()
        {
            InOrderTraverseNode(root);
        }

        private void InOrderTraverseNode(Node node)
        {
            if (node != null)
            {
                InOrderTraverseNode(node.Left);
                Console.WriteLine(node.Key);
                InOrderTraverseNode(node.Right);
            }
        }

        public void PreOrderTraverse()
        {
            preOrderTraverseNode(root);
        }

        private void preOrderTraverseNode(Node node)
        {
            if (node != null)
            {
                Console.WriteLine(node.Key);
                preOrderTraverseNode(node.Left);
                preOrderTraverseNode(node.Right);
            }
        }
        public void PostOrderTraverse()
        {
            PostOrderTraverseNode(root);
        }

        private void PostOrderTraverseNode(Node node)
        {
            if (node != null)
            {
                PostOrderTraverseNode(node.Left);
                PostOrderTraverseNode(node.Right);
                Console.WriteLine(node.Key);
            }
        }

        private Node FindMinNode(Node node)
        {
            while (node != null && node.Left != null)
            {
                node = node.Left;
            }
            return node;
        }

        public void Remove(int key)
        {
            root = RemoveNode(root, key);
        }

        private Node RemoveNode(Node node, int key)
        {
            if (node == null)
            {
                return null;
            }
            if (key < node.Key)
            {
                node.Left = RemoveNode(node.Left, key);
                return node;
            }
            else if (key > node.Key)
            {
                node.Right = RemoveNode(node.Right, key);
                return node;
            }
            else
            {
                if (node.Left == null && node.Right == null)
                {
                    node = null;
                    return node;
                }
                if (node.Left == null)
                {
                    node = node.Right;
                    return node;
                }
                else if (node.Right == null)
                {
                    node = node.Left;
                    return node;
                }
                var aux = FindMinNode(node.Right);
                node.Key = aux.Key;
                node.Right = RemoveNode(node.Right, aux.Key);
                return node;
            }
        }

        public override string ToString()
        {
            return "BinarySearchTree{" +
                    "root=" + root.ToString() +
                    '}';
        }
    }
}
