package com.dsa;

public class LinkedList<T> {
    public Node<T> getHead() {
        return head;
    }

    public void setHead(Node<T> head) {
        this.head = head;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    private Node<T> head;
    private int length;

    public LinkedList() {
        length = 0;
    }

    public Node<T> add(T value) {
        if (head == null) {
            head = new Node<T>(value);
            length++;
            return head;
        }

        var node = head;
        while (node.next != null) {
            node = node.next;
        }
        node.next = new Node<T>(value);
        length++;
        return node.next;
    }

    public void insert(T value, int index) {
        if (index >= 0 && index <= length) {
            var node = new Node<T>(value);
            if (index == 0) {
                var current = head;
                node.next = current;
                head = node;
            } else {
                var previous = getElementAt(index - 1);
                var current = previous.next;
                node.next = current;
                previous.next = node;
            }
            length++;
        }
    }

    public void removeAt(int index) {
        if (index >= 0 && index < length) {
            var currentNode = head;
            if (index == 0) {
                head = currentNode.next;
            } else {
                Node<T> previous = null;
                for (var i = 0; i < index; i++) {
                    previous = currentNode;
                    currentNode = currentNode.next;
                }
                previous.next = currentNode.next;
            }
            length--;
        }
    }

    public void remove(T value) {
        var index = indexOf(value);
        removeAt(index);
    }

    public int indexOf(T value) {
        var current = head;
        for (var i = 0; i < length && current != null; i++) {
            if (current.value.equals(value)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    public Node<T> getElementAt(int index) {
        if (index >= 0 && index <= length) {
            Node<T> node = head;
            for (var i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return null;
    }

    public Node<T>[] iterable() {
        Node<T>[] array = new Node[length];
        if (length > 0) {
            var node = head;
            for (int i = 0; i < length; i++) {
                array[i] = node;
                node = node.next;
            }
        }
        return array;
    }

    public String printList() {
        return head.toString();
    }
}
