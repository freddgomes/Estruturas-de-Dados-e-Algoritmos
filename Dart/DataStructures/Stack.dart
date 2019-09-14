// last in, first out LIFO

import 'LinkedList.dart';

class Stack<T> {
  int count = 0;
  LinkedList list = LinkedList<T>();

  void push(value) {
    this.list.insert(value, this.count);
    this.count++;
  }

  void pop() {
    this.list.removeAt(this.count - 1);
    this.count--;
  }

  void printStack() {
    this.list.printList();
  }
}

void main(List<String> args) {
  Stack stack = new Stack<int>();

  print("inserting values");
  stack.push(1);
  stack.printStack();
  stack.push(2);
  stack.printStack();
  stack.push(3);
  stack.printStack();
  stack.push(4);
  stack.printStack();

  print("removing values");
  stack.pop();
  stack.printStack();
  stack.pop();
  stack.printStack();
  stack.pop();
  stack.printStack();
  stack.pop();
  stack.printStack();
  stack.pop();
  stack.printStack();
  stack.pop();
  stack.printStack();
}
