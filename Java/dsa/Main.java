package com.dsa;

public class Main {

    public static void main(String[] args) {
        System.out.println("Linked List...\n");
        var list = new LinkedList<Integer>();

        System.out.println("insert value: 9");
        list.add(9);
        System.out.println("insert value: 4");
        list.add(4);
        System.out.println("insert value: 7");
        list.add(7);
        System.out.println("insert value: 3");
        list.add(3);
        System.out.println("insert value: 29");
        list.add(29);
        System.out.println("insert value: 14");
        list.add(14);
        System.out.println(list.printList());
        System.out.println(list.getLength());
        System.out.println("remove at: 2");
        list.removeAt(2);
        System.out.println(list.printList());
        System.out.println(list.getLength());
        System.out.println("remove at: 4");
        list.removeAt(4);
        System.out.println(list.printList());
        System.out.println(list.getLength());
        System.out.println("remove at: -1");
        list.removeAt(-1);
        list.printList();
        System.out.println(list.getLength());

        list.printList();
        System.out.println(list.getLength());
        System.out.println("get element by index 0: ");
        System.out.println(list.getElementAt(0).value);
        System.out.println("get element by index 2: ");
        System.out.println(list.getElementAt(2).value);
        System.out.println("insert element at index 1");
        list.insert(77, 1);
        list.printList();
        list.add(1);
        System.out.println(list.printList());
        System.out.println("get index by value: 77");
        System.out.println(list.indexOf(77));
        System.out.println("get index by value: 17");
        System.out.println(list.indexOf(17));
        System.out.println(list.printList());
        System.out.println("remove element 29");
        list.remove(29);
        System.out.println(list.printList());
        System.out.println("remove element 9");
        list.remove(9);
        System.out.println(list.printList());
        System.out.println("Iterable list...");
        var array = list.iterable();
        for (Node<Integer> item : array) {
            System.out.println(item.value);
        }
    }
}
