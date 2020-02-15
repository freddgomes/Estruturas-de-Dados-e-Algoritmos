using DSA.util;
using System;

namespace DSA
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Stack....");
            var stack = new Stack<int>();
            stack.Push(4);
            stack.Push(9);
            stack.Push(3);
            stack.Push(6);
            Console.WriteLine(stack.ToString());
            stack.Pop();
            Console.WriteLine(stack.Peek());
            stack.Pop();
            Console.WriteLine(stack.IsEmpty());
            Console.WriteLine(stack.Size());
            Console.WriteLine(stack.ToString());

            Console.WriteLine("Queue....");

            var queue = new Queue<int>();
            queue.Enqueue(2);
            queue.Enqueue(3);
            queue.Enqueue(1);
            queue.Enqueue(6);
            queue.Enqueue(8);
            Console.WriteLine(queue.ToString());
            Console.WriteLine(queue.Front());
            Console.WriteLine(queue.IsEmpty());
            Console.WriteLine(queue.Size());
            queue.Dequeue();
            Console.WriteLine(queue.ToString());
            Console.WriteLine(queue.Front());
            Console.WriteLine(queue.IsEmpty());
            Console.WriteLine(queue.Size());
            queue.Dequeue();
            Console.WriteLine(queue.ToString());

            Console.WriteLine("Linked List....");

            var list = new LinkedList<int>();
            list.Add(11);
            list.Add(7);
            list.Add(6);
            list.Add(5);
            list.Add(3);
            list.Add(8);
            list.Add(12);
            list.Add(71);
            Console.WriteLine(list.Contains(8));
            Console.WriteLine(list.Contains(1));
            Console.WriteLine(list.Print());
            Console.WriteLine(list.RemoveAt(3));
            Console.WriteLine(list.Print());
            Console.WriteLine(list.Insert(1, 86));
            Console.WriteLine(list.Contains(1));
            Console.WriteLine(list.Print());
            Console.WriteLine(list.Remove(1));
            Console.WriteLine(list.Print());
            Console.WriteLine(list.Remove(3));
            Console.WriteLine(list.Print());
            Console.WriteLine(list.IsEmpty());
            Console.WriteLine(list.Size());
            Console.WriteLine(list.GetHead());
            Console.WriteLine(list.Insert(0, 44));
            Console.WriteLine(list.Print());

            Console.WriteLine("TSet....");


            var tSet = new Set<object>();
            tSet.Add("test");
            tSet.Add(7);
            tSet.Add("js");
            Console.WriteLine(tSet.Size());
            Console.WriteLine(tSet.Has(8));
            Console.WriteLine(tSet.Has("test"));
            Console.WriteLine(tSet.Delete(7));
            Console.WriteLine(tSet.Delete(6));
            Console.WriteLine(tSet.Has(7));
            Console.WriteLine(tSet.ToString());

            var TSetA = new Set<int>(); TSetA.Add(1); TSetA.Add(2); TSetA.Add(3); TSetA.Add(9);
            var TSetB = new Set<int>(); TSetB.Add(3); TSetB.Add(4); TSetB.Add(2); TSetB.Add(6);
            var TSetC = new Set<int>(); TSetC.Add(10); TSetC.Add(1); TSetC.Add(2); TSetC.Add(3); TSetC.Add(9);

            var unionAB = TSetA.Union(TSetB);
            Console.WriteLine(unionAB.ToString());

            var intersectionAB = TSetA.Intersection(TSetB);
            Console.WriteLine(intersectionAB.ToString());

            var differenceAB = TSetA.Difference(TSetB);
            Console.WriteLine(differenceAB.ToString());

            Console.WriteLine(TSetA.Subset(TSetB));
            Console.WriteLine(TSetA.Subset(TSetC));


            Console.WriteLine("Binary Search Tree....");
            var bst = new BinarySearchTree();
            bst.Insert(5);
            bst.Insert(6);
            bst.Insert(3);
            bst.Insert(4);
            bst.Insert(1);
            bst.Insert(9);
            Console.WriteLine("_____");
            Console.WriteLine(bst.ToString());
            bst.InOrderTraverse();
            Console.WriteLine("_____");
            bst.PreOrderTraverse();
            Console.WriteLine("_____");
            bst.PostOrderTraverse();
            bst.Remove(0);
            bst.Remove(4);
            Console.WriteLine("_____");
            Console.WriteLine(bst.ToString());


            Console.WriteLine("Bubble sort...");
            var array = new int[] { 2, 4, 6, 1, 9, 13, 4, 5 };
            var array2 = new int[] { 2, 45, 6, 11, 92, 13, 4, 5, 7, 9, 8 };
            var bubbleSort = new BubbleSort();
            Console.WriteLine(JSon.ConvertToJson(array));
            Console.WriteLine(JSon.ConvertToJson(array2));
            bubbleSort.Sort(array);
            bubbleSort.ModifiedSort(array2);
            Console.WriteLine(JSon.ConvertToJson(array));
            Console.WriteLine(JSon.ConvertToJson(array2));

            Console.WriteLine("-----------");

            Console.WriteLine("Selection sort...");

            var array3 = new int[] { 2, 45, 6, 111, 92, 13, 4, 5, 7, 9, 8 };
            var selectionSort = new SelectionSort();
            Console.WriteLine(JSon.ConvertToJson(array3));
            selectionSort.Sort(array3);
            Console.WriteLine(JSon.ConvertToJson(array3));
            Console.WriteLine("-----------");

            Console.WriteLine("Quick sort...");

            var array5 = new int[] { 2, 45, 6, 111, 92, 13, 4, 5, 7, 9, 8, 999, 3, 55, 14, 32, 75, 16, 321, 96, 13, 54, 65, 57, 59, 58, 899, 63, -5, 204 };
            var quickSort = new QuickSort();
            Console.WriteLine(JSon.ConvertToJson(array5));
            quickSort.Sort(array5);
            Console.WriteLine(JSon.ConvertToJson(array5));
            Console.WriteLine("-----------");

            Console.WriteLine("Linerar Search...");
            var search = new Search();
            var index = search.LinearSearch(array5, 4);
            Console.WriteLine(index);
            Console.WriteLine("-----------");

            Console.WriteLine("Binary Search...");
            index = search.LinearSearch(array5, 899);
            Console.WriteLine(index);
            Console.WriteLine("-----------");
            Console.ReadLine();
        }
    }
}
