using DSA.util;
using System.Collections;

namespace DSA
{
    public class Stack<T>
    {
        private readonly ArrayList array;
        private int count;

        public Stack()
        {
            array = new ArrayList();
            count = 0;
        }

        public void Push(T element)
        {
            array.Add(element);
            count++;
        }

        public void Pop()
        {
            array.RemoveAt(count - 1);
            count--;
        }

        public int Size()
        {
            return count;
        }

        public bool IsEmpty()
        {
            return count == 0;
        }

        public T Peek()
        {
            return (T)array[count - 1];
        }

        public override string ToString()
        {
            return JSon.ConvertToJson(array);
        }
    }
}
