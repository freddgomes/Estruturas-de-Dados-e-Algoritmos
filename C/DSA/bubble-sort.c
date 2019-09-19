#include <stdio.h>
#include <stdbool.h>

#define MAX 20

int array[MAX] = {1, 8, 4, 6, 0, 3, 5, 2, 7, 9, 17, 13, 21, 14, 23};

void printArray(int *array)
{
    int i;
    printf("\n[");
    for (i = 0; i < MAX; i++)
    {
        printf(" %d ", array[i]);
    }

    printf("]\n");
}

void bubbleSort(int arr[], int size)
{

    bool swapped = true;
    int j = 0;
    int tmp;
    while (swapped)
    {
        swapped = false;
        j++;
        for (int i = 0; i < size - j; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    }
}

int main(int argc, char const *argv[])
{
    printArray(array);
    bubbleSort(array, MAX);
    printArray(array);
    return 0;
}
