namespace DSA
{
    public class Search
    {
        public int LinearSearch(int [] elements, int element)
        {
            for (int i = 0; i < elements.Length-1; i++)
            {
                if (elements[i] == element)
                {
                    return i;
                }
            }
            return -1;
        }

        public int BinarySearch(int [] elements, int element)
        {
            int left = -1, right = elements.Length;
            while (left < right-1)
            {
                int mid = (left + right) / 2;
                if (elements[mid] < element)
                {
                    left = mid;
                }
                else
                {
                    right = mid;
                }
            }
            return right;
        }
    }
}
