namespace DSA
{
    public class SelectionSort
    {
        public void Sort(int[] elements)
        {
            int length = elements.Length;
            for (int i = 0; i < length - 1; i++)
            {
                int min = i;
                for (int j = i+1; j < length; j++)
                {
                    if (elements[j] < elements[min])
                    {
                        min = j;
                    }
                }
                int aux = elements[i];
                elements[i] = elements[min];
                elements[min] = aux;
            }
        }

      
    }
}
