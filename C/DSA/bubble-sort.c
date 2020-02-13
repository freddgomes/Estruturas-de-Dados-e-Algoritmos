#include <stdio.h>
#include <stdbool.h>

#define MAX 15

//A ordenação por bolha (bubble sort) é um algoritmo de classificação simples. 
//Esse algoritmo de classificação é um algoritmo baseado em comparação,
//no qual cada par de elementos adjacentes é comparado 
//e os elementos são trocados se não estiverem em ordem. 
//Esse algoritmo não é adequado para grandes conjuntos de dados,
//pois sua complexidade média e no pior caso são de Ο(n2) em que n é o número de itens.

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

void swap(int arr[], int index1, int index2){
    int aux = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = aux;
}

void bubbleSort(int arr[], int size){
    int i;
    int j;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size -1; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr, j, j+1);
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
