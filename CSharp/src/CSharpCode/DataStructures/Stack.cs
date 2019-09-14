namespace CSharpCode.DataStructures
{
    public class Stack<T>
    {
        private int count = 0;
        private LinkedList<T> list;

        public Stack()
        {
            list = new LinkedList<T>();
        }
        public void Push(T value)
        {
            list.Insert(value, count);
            count++;
        }
        public void Pop()
        {
            list.RemoveAt(count - 1);
            count--;
        }
        public string PrintStack()
        {
            return list.PrintList();
        }
    }
}
