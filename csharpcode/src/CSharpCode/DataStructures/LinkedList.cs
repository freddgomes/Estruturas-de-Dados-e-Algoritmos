namespace CSharpCode.DataStructures
{
    public class Node<T>
    {
        public T Value { get; set; }
        public Node<T> Next { get; set; }
        public Node(T value)
        {
            Value = value;
        }

        public override string ToString()
        {
            return new
            {
                Value,
                Next
            }.ToString();
        }
    }

    // usar equals em comparações, evitar ==
    public class LinkedList<T> : ILinkedList<T>
    {
        public Node<T> Head;
        public int Length { private set; get; }
        public LinkedList()
        {
            Length = 0;
        }

        public Node<T> Add(T value)
        {
            if (Head == null)
            {
                Head = new Node<T>(value);
                Length++;
                return Head;
            }

            var node = Head;
            while (node.Next != null)
            {
                node = node.Next;
            }
            node.Next = new Node<T>(value);
            Length++;
            return node.Next;
        }

        public void Insert(T value, int index)
        {
            if (index >= 0 && index <= Length)
            {
                var node = new Node<T>(value);
                if (index == 0)
                {
                    var current = Head;
                    node.Next = current;
                    Head = node;
                }
                else
                {
                    var previous = GetElementAt(index - 1);
                    var current = previous.Next;
                    node.Next = current;
                    previous.Next = node;
                }
                Length++;
            }
        }

        public void RemoveAt(int index)
        {
            if (index >= 0 && index < Length)
            {
                var currentNode = Head;
                if (index == 0)
                {
                    Head = currentNode.Next;
                }
                else
                {
                    Node<T> previous = null;
                    for (var i = 0; i < index; i++)
                    {
                        previous = currentNode;
                        currentNode = currentNode.Next;
                    }
                    previous.Next = currentNode.Next;
                }
                Length--;
            }
        }

        public void Remove(T value)
        {
            var index = IndexOf(value);
            RemoveAt(index);
        }

        public int IndexOf(T value)
        {
            var current = Head;
            for (var i = 0; i < Length && current != null; i++)
            {
                if (current.Value.Equals(value))
                {
                    return i;
                }
                current = current.Next;
            }
            return -1;
        }

        public Node<T> GetElementAt(int index)
        {
            if (index >= 0 && index <= Length)
            {
                Node<T> node = Head;
                for (var i = 0; i < index && node != null; i++)
                {
                    node = node.Next;
                }
                return node;
            }
            return null;
        }

        public Node<T>[] Iterable()
        {
            Node<T>[] array = new Node<T>[Length];
            if (Length > 0)
            {
                var node = Head;
                for (int i = 0; i < Length; i++)
                {
                    array[i] = node;
                    node = node.Next;
                }
            }
            return array;
        }

        public string PrintList()
        {
            return Head?.ToString();
        }
    }
}