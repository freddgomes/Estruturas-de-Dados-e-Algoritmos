//Quick Sort é um algoritmo de classificação altamente eficiente
//e baseia-se no particionamento da matriz de dados em matrizes menores.
//Uma matriz grande é particionada em duas matrizes.
//uma mantém valores menores que o valor especificado, 
//chamado de pivô, com base no qual a partição é feita.
//A outra matriz mantém valores maiores que o valor do pivô.

//O Quick Sort particiona uma matriz 
//e se chama recursivamente duas vezes 
//para classificar as duas sub-matrizes resultantes. 
//Esse algoritmo é bastante eficiente para conjuntos de dados de grande porte,
//pois sua complexidade média e pior dos casos é de Ο(n2),
//onde n é o número de itens.

#include <stdio.h>

#define MAX 10

int array[MAX] ={4,6,3,2,1,9,7,8,0,5};

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

void swap(int arr[], int index1, int index2){
    int aux = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = aux;
}

int  partition(int arr[], int start, int end)
{
    int i, j;
    i = start;
    for (j = start; j < end; j++)
    {
        if (arr[j] <= arr[end])
        {
            swap(arr, i++, j);
        }
    }
    swap(arr, i, end);
    return i;
}
//quicksort recursivo
void quicksort(int arr[], int start, int end)
{
    if (start < end)
    {
        int pivot = partition(arr, start, end);
        quicksort(arr, start, pivot-1);
        quicksort(arr, pivot+1, end);
    }
}

void sort(int arr[]) {
    quicksort(arr, 0, MAX - 1);
}
int main(int argc, char const *argv[])
{
    printArray(array);
    sort(array);
    printArray(array);
    return 0;
}
