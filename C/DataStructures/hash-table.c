#include <stdio.h>
#include <stdlib.h>

#define SIZE 20

int count = 0;
struct dataItem
{
    int data;
    int key;
};

struct dataItem *hashArray[SIZE];

int hashcode(int key)
{
    return key % SIZE;
}

struct dataItem *search(int key)
{
    int hashIndex = hashcode(key);
    int counter = 0;
    while (hashArray[hashIndex] != NULL)
    {
        if (counter++ > SIZE)
        {
            return NULL;
        }

        if (hashArray[hashIndex]->key == key)
        {
            return hashArray[hashIndex];
        }
        hashIndex++;
        hashIndex %= SIZE;
    }
    return NULL;
}

void insert(int key, int data)
{
    if (count < SIZE)
    {
        struct dataItem *item = (struct dataItem *)malloc(sizeof(struct dataItem));
        item->data = data;
        item->key = key;

        int hashIndex = hashcode(key);

        while (hashArray[hashIndex] != NULL && hashArray[hashIndex]->key != -1 && hashArray[hashIndex]->key != key)
        {
            hashIndex++;
            hashIndex %= SIZE;
        }
        if (hashArray[hashIndex] == NULL || hashArray[hashIndex]->key == -1)
        {
            count++;
        }

        hashArray[hashIndex] = item;
    }
}

struct dataItem *delete (int key)
{
    struct dataItem *empty;

    int hashIndex = hashcode(key);
    while (hashArray[hashIndex] != NULL)
    {
        if (hashArray[hashIndex]->key == key)
        {
            struct dataItem *temp = hashArray[hashIndex];
            hashArray[hashIndex] = empty;
            count--;
            return temp;
        }
        ++hashIndex;
        hashIndex %= SIZE;
    }
    return NULL;
}

void printHash()
{
    int i = 0;
    for (i = 0; i < SIZE; i++)
    {
        if (hashArray[i] != NULL)
        {
            printf(" (%d, %d)", hashArray[i]->key, hashArray[i]->data);
        }
        else
        {
            printf(" _ ");
        }
        printf("\n");
    }
}

void printMessage(struct dataItem *item)
{
    if (item != NULL)
    {
        printf("Element found: %d \n", item->data);
    }
    else
    {
        printf("Element not found! \n");
    }
}

int main(int argc, char const *argv[])
{
    struct dataItem *empty = (struct dataItem *)malloc(sizeof(struct dataItem));
    empty->data = -1;
    empty->key = -1;

    insert(1, 20);
    insert(2, 70);
    insert(42, 80);
    insert(4, 25);
    insert(12, 44);
    insert(14, 32);
    insert(17, 11);
    insert(13, 78);
    insert(37, 97);
    insert(46, 25);
    insert(11, 44);
    insert(19, 32);
    insert(27, 11);
    insert(83, 78);
    insert(77, 97);
    insert(41, 25);
    insert(22, 44);
    insert(84, 32);
    insert(57, 11);
    insert(3, 78);
    insert(7, 97);

    printHash();
    printMessage(search(37));
    printMessage(search(889));
    delete(84);
    delete(4);
    printHash();
    printMessage(search(41));
    return 0;
}