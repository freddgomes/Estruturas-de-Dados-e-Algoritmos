#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *left, *right;
};

struct node *root = NULL;

struct node *newNode(int data)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->left = temp->right = NULL;
    return temp;
}

struct node *insert(struct node *node, int data)
{
    if (root == NULL)
    {
        root = newNode(data);
        return root;
    }
    if (node == NULL)
    {
        return newNode(data);
    }
    if (data < node->data)
    {
        node->left = insert(node->left, data);
    }
    else if (data > node->data)
    {
        node->right = insert(node->right, data);
    }
    return node;
}

struct node *search(struct node *node, int data)
{
    if (node == NULL || node->data == data)
    {
        return node;
    }
    if (node->data < data)
    {
        return search(node->right, data);
    }
    return search(node->left, data);
}

void inOrder(struct node *root)
{
    if (root != NULL)
    {
        inOrder(root->left);
        printf("%d - ", root->data);
        inOrder(root->right);
    }
}

struct node *minValueNode(struct node *node)
{
    struct node *current = node;
    while (current && current->left != NULL)
    {
        current = current->left;
    }
    return current;
}

struct node *delete (struct node *node, int data)
{
    if (node == NULL)
    {
        return node;
    }
    if (data < node->data)
    {
        node->left = delete (node->left, data);
    }
    else if (data > node->data)
    {
        node->right = delete (node->right, data);
    }
    else
    {
        if (node->left == NULL)
        {
            struct node *temp = node->right;
            free(node);
            return temp;
        }
        else if (node->right == NULL)
        {
            struct node *temp = node->left;
            free(node);
            return temp;
        }

        struct node *temp = minValueNode(node->right);
        node->data = temp->data;
        node->right = delete (node->right, temp->data);
    }
    return node;
}

int main(int argc, char const *argv[])
{
    insert(root, 2);
    insert(root, 22);
    insert(root, 1);
    insert(root, 7);
    insert(root, 11);
    insert(root, 57);

    inOrder(root);
    struct node *element = search(root, 22);
    printf("element found: %d\n", element->data);
    struct node *element2 = search(root, 3);
    printf("element not found \n");

    delete(root, 1);
    printf("\n");
    inOrder(root);
    delete(root, 57);
    printf("\n");
    inOrder(root);
    return 0;
}
