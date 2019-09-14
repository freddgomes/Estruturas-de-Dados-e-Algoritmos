using System;
using System.Collections.Generic;

namespace CSharpCode.DataStructures
{
    public class BSTNode<T>
    {
        public T Key { get; set; }
        public BSTNode<T> Left { get; set; }
        public BSTNode<T> Right { get; set; }
        public BSTNode(T value)
        {
            Key = value;
            Left = null;
            Right = null;
        }

        public override string ToString()
        {
            return new
            {
                Key,
                Left,
                Right
            }.ToString();
        }

        public int CompareTo(T otherValue)
        {
            var newKey = Key as IComparable<T>;
            var newValue = otherValue as IComparable<T>;
            return newKey.CompareTo(otherValue);
        }
    }

    public class BinarySearchTree<T> : IBinarySearchTree<T>
    {
        public BSTNode<T> Root { get; set; }
        public BinarySearchTree()
        {
            Root = null;
        }

        public void Insert(T key)
        {
            if (Root == null)
            {
                Root = new BSTNode<T>(key);
            }
            else
            {
                InsertNode(Root, key);
            }
        }

        public void InsertNode(BSTNode<T> node, T key)
        {
            if (node.CompareTo(key) > 0)
            {
                if (node.Left == null)
                {
                    node.Left = new BSTNode<T>(key);
                }
                else
                {
                    InsertNode(node.Left, key);
                }
            }
            else
            {
                if (node.Right == null)
                {
                    node.Right = new BSTNode<T>(key);
                }
                else
                {
                    InsertNode(node.Right, key);
                }
            }
        }

        public List<T> InOrderTraverse()
        {
            var listNode = new List<T>();
            InOrderTraverseNode(Root, listNode);
            return listNode;
        }

        public void InOrderTraverseNode(BSTNode<T> node, List<T> listNode)
        {
            if (node != null)
            {
                InOrderTraverseNode(node.Left, listNode);
                listNode.Add(node.Key);
                InOrderTraverseNode(node.Right, listNode);
            }
        }

        public List<T> PreOrderTraverse()
        {
            var listNode = new List<T>();
            PreOrderTraverseNode(Root, listNode);
            return listNode;
        }

        private void PreOrderTraverseNode(BSTNode<T> node, List<T> listNode)
        {
            if (node != null)
            {
                listNode.Add(node.Key);
                PreOrderTraverseNode(node.Left, listNode);
                PreOrderTraverseNode(node.Right, listNode);
            }
        }

        public List<T> PostOrderTraverse()
        {
            var listNode = new List<T>();
            PostOrderTraverseNode(Root, listNode);
            return listNode;
        }

        private void PostOrderTraverseNode(BSTNode<T> node, List<T> listNode)
        {
            if (node != null)
            {
                PostOrderTraverseNode(node.Left, listNode);
                PostOrderTraverseNode(node.Right, listNode);
                listNode.Add(node.Key);
            }
        }

        public BSTNode<T> Min()
        {
            return MinNode(Root);
        }

        private BSTNode<T> MinNode(BSTNode<T> node)
        {
            var current = node;
            while (current != null && current.Left != null)
            {
                current = current.Left;
            }
            return current;
        }

        public BSTNode<T> Max()
        {
            return MaxNode(Root);
        }

        private BSTNode<T> MaxNode(BSTNode<T> node)
        {
            var current = node;
            while (current != null && current.Right != null)
            {
                current = current.Right;
            }
            return current;
        }

        public bool Search(T key)
        {
            return SearchNode(Root, key);
        }

        private bool SearchNode(BSTNode<T> node, T key)
        {
            if (node == null)
            {
                return false;
            }
            if (node.CompareTo(key) > 0)
            {
                return SearchNode(node.Left, key);
            }
            else if (node.CompareTo(key) < 0)
            {
                return SearchNode(node.Right, key);
            }
            else
            {
                return true;
            }
        }

        public void Remove(T key)
        {
            Root = RemoveNode(Root, key);
        }

        private BSTNode<T> RemoveNode(BSTNode<T> node, T key)
        {
            if (node == null)
            {
                return null;
            }
            if (node.CompareTo(key) > 0)
            {
                node.Left = RemoveNode(node.Left, key);
                return node;
            }
            else if (node.CompareTo(key) < 0)
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

                var aux = MinNode(node.Right);
                node.Key = aux.Key;
                node.Right = RemoveNode(node.Right, aux.Key);
                return node;
            }
        }

        public string PrintBST()
        {
            return Root?.ToString();
        }
    }
}
