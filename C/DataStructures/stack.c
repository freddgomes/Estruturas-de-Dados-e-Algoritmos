#include <stdio.h>
#include <stdbool.h>


#define MAXSIZE 10

int stack[MAXSIZE];
int top = 0;

bool isEmpty()
{
    return top == 0;
}

bool isFull()
{
    return top == MAXSIZE;
}

int peek()
{
    return stack[top];
}

void pop()
{
    if (!isEmpty())
    {
        stack[top] = NULL;
        top--;
    }
}

void push(int data)
{
    if (!isFull())
    {
        stack[top] = data;
        top++;
    }
}

void printStack()
{
    printf("\n[ ");
    for (int i = 0; i < top; i++)
    {
        printf("%d ", stack[i]);
    }

    printf("]\n");
}

int main(int argc, char const *argv[])
{
    push(3);
    printStack();
    push(2);
    printStack();
    push(99);
    printStack();
    pop();
    printStack();
    pop();
    pop();
    printStack();
    return 0;
}
