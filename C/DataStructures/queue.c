#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX 10

int queue[MAX];
int front = -1;
int rear = -1;

int peek()
{
    return queue[front];
}

bool isEmpty()
{
    return front == -1;
}

bool isFull()
{
    return (front == 0 && rear == MAX - 1);
}

void enqueue(int data)
{
    if (!isFull())
    {
        if (front == -1)
        {
            front = 0;
        }
        
        rear = rear + 1;
        queue[rear] = data;
    }
}

// void dequeue()
// {
//     if (!isEmpty())
//     {
//         front = front + 1;
//     }
// }

void dequeue()
{
    if (!isEmpty())
    {
        if (front >= rear)
        {
            front = -1;
            rear = -1;
        }
        else
        {
            front++;
        }
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
        for (int i = front; i <= rear; i++)
        {
            printf(" %d ", queue[i]);
        }
        printf("]\n");
    }
}

int main()
{
    printf("insert 5 values");
    enqueue(3);
    enqueue(5);
    enqueue(9);
    enqueue(1);
    enqueue(12);
    enqueue(15);
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
    enqueue(12);
    printQueue();
    printf("Element at front: %d\n", peek());
    dequeue();
    printQueue();
}
