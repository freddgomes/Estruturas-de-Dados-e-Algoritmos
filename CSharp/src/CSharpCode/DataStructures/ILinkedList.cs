namespace CSharpCode.DataStructures
{
    public interface ILinkedList<T>
    {
        int Length { get; }

        Node<T> Add(T value);
        Node<T> GetElementAt(int index);
        int IndexOf(T value);
        void Insert(T value, int index);
        string PrintList();
        void Remove(T value);
        void RemoveAt(int index);
        Node<T>[] Iterable();

    }
}