namespace CSharpCode.DataStructures
{
    public class Queue<T>
    {
        private int count = 0;
        private LinkedList<T> list;

        public Queue()
        {
            list = new LinkedList<T>();
        }

        public void Enqueue(T value)
        {
            list.Insert(value, count);
            count++;
        }
        public string PrintQueue()
        {
            return list.PrintList();
        }
        public void Dequeue()
        {
            if (count > 0)
            {
                list.RemoveAt(0);
                count--;
            }
        }
        public T Peek()
        {
            return list.GetElementAt(0).Value;
        }
    }
}
