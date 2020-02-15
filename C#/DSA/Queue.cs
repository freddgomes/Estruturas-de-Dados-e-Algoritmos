using DSA.util;
using System.Collections;

namespace DSA
{
    public class Queue<T>
    {

        private readonly ArrayList array;
        private int count;

        public Queue()
        {
            array = new ArrayList();
            count = 0;
        }

        public void Enqueue(T element)
        {
            array.Add(element);
            count++;
        }
        public void Dequeue()
        {
            array.RemoveAt(0);
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

        public T Front()
        {
            return (T)array[0];
        }

        public override string ToString()
        {
            return JSon.ConvertToJson(array);
        }
    }
}
