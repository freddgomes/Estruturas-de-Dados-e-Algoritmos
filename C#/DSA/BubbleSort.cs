namespace DSA
{
    public class BubbleSort
    {
        public void Sort(int[] elements)
        {
            var length = elements.Length;
            for (int i = 0; i < length; i++)
            {
                for (int j = 0; j < length - 1; j++)
                {
                    if (elements[j] > elements[j + 1])
                    {
                        Swap(elements, j, j + 1);
                    }
                }
            }
        }
        public void ModifiedSort(int[] elements)
        {
            var length = elements.Length;
            for (int i = 0; i < length; i++)
            {
                for (int j = 0; j < length - 1 - i; j++)
                {
                    if (elements[j] > elements[j + 1])
                    {
                        Swap(elements, j, j + 1);
                    }
                }
            }
        }

        private void Swap(int[] array, int index1, int index2)
        {
            var aux = array[index1];
            array[index1] = array[index2];
            array[index2] = aux;
        }
    }
}
