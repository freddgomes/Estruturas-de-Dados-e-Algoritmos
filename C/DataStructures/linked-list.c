#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

// gcc -Wall -std=c11 linked-list.c -o list.exe 
struct node
{
    int data;
    int key;
    struct node *next;
};

struct node *head = NULL;
struct node *current = NULL;

void printList()
{
    struct node *ptr = head;
    printf("\n[ ");
    while (ptr != NULL)
    {
        printf("(%d, %d)->", ptr->key, ptr->data);
        ptr = ptr->next;
    }
    printf(" ]\n");
}

bool isEmpty()
{
    return head == NULL;
}
void insertFirst(int key, int data)
{
    struct node *link = (struct node *)malloc(sizeof(struct node));

    link->key = key;
    link->data = data;
    link->next = head;
    head = link;
}

void append(int key, int data)
{
    struct node *link = (struct node *)malloc(sizeof(struct node));

    link->key = key;
    link->data = data;
    if (isEmpty())
    {
       head = link;
    }
    else
    {
        struct node *tempNode;
        tempNode = head;
        while (tempNode != NULL && tempNode->next != NULL)
        {
            tempNode = tempNode->next;
        }
        tempNode->next = link;
    }
}

struct node *deleteFirst()
{
    struct node *tempLink = head;
    head = head->next;
    return tempLink;
};

int length()
{
    int length = 0;
    struct node *current;

    for (current = head; current != NULL; current = current->next)
    {
        length++;
    }
    return length;
}

struct node *find(int key)
{
    struct node *current = head;

    if (head == NULL)
    {
        return NULL;
    }

    while (current->key != key)
    {
        if (current->next == NULL)
        {
            return NULL;
        }
        else
        {
            current = current->next;
        }
    }
    return current;
}

struct node *delete (int key)
{
    struct node *current = head;
    struct node *previous = NULL;

    if (head == NULL)
    {
        return NULL;
    }

    while (current->key != key)
    {
        if (current->next == NULL)
        {
            return NULL;
        }
        else
        {
            previous = current;
            current = current->next;
        }
    }

    if (current == head)
    {
        head = head->next;
    }
    else
    {
        previous->next = current->next;
    }
    return current;
}

void reverse(struct node **head_ref)
{
    struct node *prev = NULL;
    struct node *current = *head_ref;
    struct node *next;

    while (current != NULL)
    {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    *head_ref = prev;
}

int main(int argc, char const *argv[])
{
    printf("insert value...\n");
    append(1, 10);
    append(2, 20);
    append(3, 30);
    append(4, 1);
    append(5, 40);
    append(6, 56);

    printf("Linked list\n");
    printList();
    printf("count -> %d \n", length());
    printf("remove value\n");
    deleteFirst();
    printList();
    deleteFirst();
    printList();
    printf("insert first\n");
    insertFirst(54, 420);
    printList();
    printf("reverse list...\n");
    reverse(&head);
    printList();
    printf("find...\n");
    int value = find(6)->data;
    printf("%d \n", value);
    return 0;
}