namespace DSA
{
    internal class Node<T>
    {
        public T Value { get; }
        public Node<T> Next { get; set; }
        public Node(T value)
        {
            Value = value;
        }
    }
    public class LinkedList<T>
    {
        private Node<T> head;
        private int count;

        public void Add(T value)
        {
            var node = new Node<T>(value);
            if (head == null)
            {
                head = node;
            }
            else
            {
                var current = head;
                while (current.Next != null)
                {
                    current = current.Next;
                }
                current.Next = node;
            }
            count++;
        }

        public bool Insert(int position, T value)
        {
            if (position >= 0 && position <= count)
            {
                var node = new Node<T>(value);
                var current = head;
                var index = 0;
                Node<T> previous = null;

                if (position == 0)
                {
                    node.Next = current;
                    head = node;
                }
                else
                {
                    while (index++ < position)
                    {
                        previous = current;
                        current = current.Next;
                    }
                    node.Next = current;
                    previous.Next = node;
                }
                count++;
                return true;
            }
            return false;
        }

        public bool RemoveAt(int position)
        {
            if (position > -1 && position < count)
            {
                var current = head;
                var index = 0;
                Node<T> previous = null;

                if (position == 0)
                {
                    head = current.Next;
                }
                else
                {
                    while (index++ < position)
                    {
                        previous = current;
                        current = current.Next;
                    }
                    previous.Next = current.Next;
                }
                count--;
                return true;
            }
            return false;
        }
        public bool Remove(T value)
        {
            var index = IndexOf(value);
            return RemoveAt(index);
        }
        public int IndexOf(T value)
        {
            var current = head;
            var index = 0;
            while (current != null)
            {
                if (current.Value.Equals(value))
                {
                    return index;
                }
                index++;
                current = current.Next;
            }
            return -1;
        }

        public bool IsEmpty() { return count == 0; }
        public int Size() { return count; }
        public T GetHead() { return head.Value; }

        public bool Contains(T value)
        {
            var node = head;
            while (node != null && !node.Value.Equals(value))
            {
                node = node.Next;
            }
            if (node == null)
            {
                return false;
            }
            return true;
        }

        public string Print()
        {
            string str = " ";
            if (head != null)
            {
                var current = head;

                while (current != null)
                {
                    str = str + current.Value.ToString() + " -> ";
                    current = current.Next;
                }
            }
            return str;
        }
    }
}
