using System;

namespace DSA
{
    public class QuickSort
    {
        public void Sort(int[] elements)
        {
            quickSort(elements, 0, elements.Length-1);
        }

        private void quickSort(int[] elements, int low, int high)
        {
            if (high > low)
            {
                int pivot = partition(elements, low, high);
                quickSort(elements, low, pivot - 1);
                quickSort(elements, pivot + 1, high);
            }
        }

        private int partition(int[] elements, int low, int high)
        {
            int pivot = elements[low];
            int left = low;
            int right = high;
            while (left < right)
            {
                while (left <= high && elements[left] <= pivot)
                {
                    left++;
                }
                while (right >=0 && elements[right] > pivot)
                {
                    right--;
                }

                if (left < right)
                {
                    var aux = elements[left];
                    elements[left] = elements[right];
                    elements[right] = aux;
                }
            }
            elements[low] = elements[right];
            elements[right] = pivot;
            return right;
        }
    }
}
