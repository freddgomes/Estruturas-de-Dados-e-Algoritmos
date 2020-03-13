using System;
using System.Linq;

namespace Algorithms
{
    public class ArrayStack<T>
    {
        private T[] array = new T[10];
        private int count = 0;

        public ArrayStack()
        {
        }
        public void Push(T item)
        {
            array[count] = item;
            count++;
        }

        public T Pop()
        {
            var item = array[--count];
            return item;
        }

        public override string ToString()
        {
            var str = "";
            array.ToList().ForEach(x => str = str + x.ToString() + " ");
            return str;
        }
    }
}
