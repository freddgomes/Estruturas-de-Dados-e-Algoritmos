using System.Collections.Generic;

namespace CSharpCode.DataStructures
{
    public interface IBinarySearchTree<T>
    {
        BSTNode<T> Root { get; set; }

        List<T> InOrderTraverse();
        void InOrderTraverseNode(BSTNode<T> node, List<T> listNode);
        void Insert(T key);
        void InsertNode(BSTNode<T> node, T key);
        BSTNode<T> Max();
        BSTNode<T> Min();
        List<T> PostOrderTraverse();
        List<T> PreOrderTraverse();
        string PrintBST();
        void Remove(T key);
        bool Search(T key);
    }
}