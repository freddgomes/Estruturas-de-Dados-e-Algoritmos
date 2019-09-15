package com.dsa;

public class Node<T> {

    public T value;
    public Node<T> next;

    public Node(T value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return String.format(" %s %s", this.value, this.next != null ? this.next.toString() : " ");
    }
}

