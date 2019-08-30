using CSharpCode.DataStructures;
using System;

namespace CSharpCode
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintBST();
            PrintLinkedList();
            PrintQueue();
            PrintStack();
        }

        private static void PrintBST()
        {
            Console.WriteLine("Binary Search Tree...\n");
            IBinarySearchTree<double> binarySearchTree = new BinarySearchTree<double>();
            binarySearchTree.Insert(2.3);
            binarySearchTree.Insert(3.1);
            binarySearchTree.Insert(1.9);
            binarySearchTree.Insert(2.3);
            binarySearchTree.Insert(0.7);
            binarySearchTree.Insert(4.6);
            Console.WriteLine(binarySearchTree.PrintBST());
            foreach (var key in binarySearchTree.InOrderTraverse())
            {
                Console.WriteLine(key);
            }
            Console.ReadLine();

            foreach (var key in binarySearchTree.PreOrderTraverse())
            {
                Console.WriteLine(key);
            }
            Console.ReadLine();
            foreach (var key in binarySearchTree.PostOrderTraverse())
            {
                Console.WriteLine(key);
            }
            Console.ReadLine();
            Console.WriteLine(binarySearchTree.Min());
            Console.ReadLine();
            Console.WriteLine(binarySearchTree.Max());
            Console.ReadLine();
            Console.WriteLine(binarySearchTree.Search(0.7));
            Console.WriteLine(binarySearchTree.Search(10));
            Console.WriteLine(binarySearchTree.Search(2.3));
            Console.WriteLine(binarySearchTree.Search(0.4));
            Console.WriteLine(binarySearchTree.Search(-1));
            Console.ReadLine();
            Console.WriteLine(binarySearchTree.PrintBST());
            Console.ReadLine();

            binarySearchTree.Remove(0.7);
            Console.WriteLine(binarySearchTree.PrintBST());
            Console.ReadLine();

            binarySearchTree.Remove(3.1);
            Console.WriteLine(binarySearchTree.PrintBST());
            Console.ReadLine();
        }
        private static void PrintStack()
        {
            Console.WriteLine("Stack...\n");
            Stack<int> stack = new Stack<int>();

            Console.WriteLine("inserting values");
            stack.Push(1);
            Console.WriteLine(stack.PrintStack());
            stack.Push(2);
            Console.WriteLine(stack.PrintStack());
            stack.Push(3);
            Console.WriteLine(stack.PrintStack());
            stack.Push(4);
            Console.WriteLine(stack.PrintStack());

            Console.WriteLine("removing values");
            stack.Pop();
            Console.WriteLine(stack.PrintStack());
            stack.Pop();
            Console.WriteLine(stack.PrintStack());
            stack.Pop();
            Console.WriteLine(stack.PrintStack());
            stack.Pop();
            Console.WriteLine(stack.PrintStack());
            stack.Pop();
            Console.WriteLine(stack.PrintStack());
            stack.Pop();
            Console.WriteLine(stack.PrintStack());
            Console.ReadLine();
        }

        private static void PrintQueue()
        {
            Console.WriteLine("Queue...\n");
            Queue<string> queue = new Queue<string>();

            Console.WriteLine("enqueue");
            queue.Enqueue("element 1");
            Console.WriteLine("enqueue");
            queue.Enqueue("element 2");
            Console.WriteLine("enqueue");
            queue.Enqueue("element 3");
            Console.WriteLine("enqueue");
            queue.Enqueue("element 4");
            Console.WriteLine(queue.PrintQueue());
            Console.WriteLine("get first: ");
            Console.WriteLine(queue.Peek());

            Console.WriteLine("dequeue");
            queue.Dequeue();
            Console.WriteLine(queue.PrintQueue());
            Console.WriteLine("get first: ");
            Console.WriteLine(queue.Peek());

            Console.WriteLine("dequeue");
            queue.Dequeue();
            Console.WriteLine(queue.PrintQueue());
            Console.WriteLine("get first: ");
            Console.WriteLine(queue.Peek());

            Console.WriteLine("dequeue");
            queue.Dequeue();
            Console.WriteLine(queue.PrintQueue());
            Console.WriteLine("get first: ");
            Console.WriteLine(queue.Peek());

            Console.WriteLine("dequeue");
            queue.Dequeue();
            Console.WriteLine(queue.PrintQueue());
            queue.Dequeue();
            Console.WriteLine(queue.PrintQueue());
            Console.ReadLine();
        }

        private static void PrintLinkedList()
        {
            Console.WriteLine("Linked List...\n");
            ILinkedList<int> list = new LinkedList<int>();

            Console.WriteLine("insert value: 9");
            list.Add(9);
            Console.WriteLine("insert value: 4");
            list.Add(4);
            Console.WriteLine("insert value: 7");
            list.Add(7);
            Console.WriteLine("insert value: 3");
            list.Add(3);
            Console.WriteLine("insert value: 29");
            list.Add(29);
            Console.WriteLine("insert value: 14");
            list.Add(14);
            Console.WriteLine(list.PrintList());
            Console.WriteLine(list.Length);
            Console.WriteLine("remove at: 2");
            list.RemoveAt(2);
            Console.WriteLine(list.PrintList());
            Console.WriteLine(list.Length);
            Console.WriteLine("remove at: 4");
            list.RemoveAt(4);
            Console.WriteLine(list.PrintList());
            Console.WriteLine(list.Length);
            list.RemoveAt(4);
            Console.WriteLine(list.PrintList());
            Console.WriteLine(list.Length);
            list.RemoveAt(4);
            Console.WriteLine(list.PrintList());
            Console.WriteLine(list.Length);
            Console.WriteLine("remove at: -1");
            list.RemoveAt(-1);
            list.PrintList();
            Console.WriteLine(list.Length);
            list.RemoveAt(0);
            list.PrintList();
            Console.WriteLine(list.Length);
            Console.WriteLine("get element by index 0: ");
            Console.WriteLine(list.GetElementAt(0).ToString());
            Console.WriteLine("get element by index 2: ");
            Console.WriteLine(list.GetElementAt(2).ToString());
            Console.WriteLine("insert element at index 1");
            list.Insert(77, 1);
            list.PrintList();
            list.Add(1);
            Console.WriteLine(list.PrintList());
            Console.WriteLine("get index by value: 77");
            Console.WriteLine(list.IndexOf(77));
            Console.WriteLine("get index by value: 17");
            Console.WriteLine(list.IndexOf(17));
            Console.WriteLine("remove element 29");
            list.Remove(29);
            Console.WriteLine(list.PrintList());
            Console.WriteLine("remove element 9");
            list.Remove(9);
            Console.WriteLine(list.PrintList());
            Console.ReadLine();
            Console.WriteLine("Iterable list...");
            var array = list.Iterable();
            foreach (var item in array)
            {
                Console.WriteLine(item.Value);
            }
        }
    }
}
