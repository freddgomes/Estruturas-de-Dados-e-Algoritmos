#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX 10

int queue[MAX];
int rear = 0;

int peek()
{
    return queue[0];
}

bool isEmpty()
{
    return rear == 0;
}

bool isFull()
{
    return (rear == MAX - 1);
}

void enqueue(int data)
{
    if (!isFull())
    {
        queue[rear] = data;
        rear++;
    }
}

void dequeue()
{
    if (!isEmpty())
    {
        int i;
        for (i = 0; i < rear; i++)
        {
            queue[i] = queue[i + 1];
        }
        rear--;
    }
}

void printQueue()
{
    if (rear == -1)
    {
        printf(" \n");
    }
    else
    {
        printf("\n[");
        for (int i = 0; i < rear; i++)
        {
            printf(" %d ", queue[i]);
        }
        printf("]\n");
    }
}

int main()
{
    printf("insert values");
    dequeue();
    enqueue(3);
    enqueue(5);
    enqueue(9);
    enqueue(1);
    enqueue(12);
    enqueue(15);
    enqueue(-4);
    printQueue();
    if (isFull())
    {
        printf("Queue is full!\n");
    }
    printf("dequeue \n");
    dequeue();
    printQueue();
    printf("enqueue 16\n");
    enqueue(16);
    printQueue();
    dequeue();
    enqueue(99);
    enqueue(13);
    printQueue();
    printf("Element at front: %d\n", peek());
    dequeue();
    printQueue();
    enqueue(34);
    printQueue();
}
