#include <stdio.h>

#define MAX 100

int array[MAX];
int comparisons = 0;

void loadArray()
{
    int i;
    for (i = 0; i < MAX; i++){
        array[i] = i * 2;
    }
}
void printArray()
{
    printf("\n[");
    int i;
    for (i = 0; i < MAX - 1; i++)
    {
        printf("%d,", (array[i]));
    }
    printf("]\n");
}
int find(int data){
    int low = 0;
    int high = MAX - 1;
    int mid = -1;
    int index = -1;

    while (low <= high)
    {
        comparisons++;
        mid = low + (high - low) / 2;
        if (array[mid] == data)
        {
            index = mid;
            return index;
        }
        else
        {
            if (array[mid] < data)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
    }
    return index;
}

int main(int argc, char const *argv[])
{
    loadArray();
    printArray();
    printf("element found at index: %d\n", find(64));
    printf("total comparisons made: %d\n", comparisons);
    return 0;
}
