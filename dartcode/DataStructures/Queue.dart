// first in, first out FIFO

import 'LinkedList.dart';

class Queue<T> {
  int count = 0;
  var list = new LinkedList<T>();

  void enqueue(value) {
    this.list.insert(value, this.count);
    this.count++;
  }

  void printQueue() {
    this.list.printList();
  }

  void dequeue() {
    if (this.count > 0) {
      this.list.removeAt(0);
      this.count--;
    }
  }

  T peek() {
    return this.list.getElementAt(0)?.value;
  }
}

main(List<String> args) {
  var queue = new Queue<String>();
  queue.enqueue("element 1");
  queue.enqueue("element 2");
  queue.enqueue("element 3");
  queue.enqueue("element 4");
  queue.printQueue();
  print("get first: ");
  print(queue.peek());

  queue.dequeue();
  queue.printQueue();
  print("get first: ");
  print(queue.peek());

  queue.dequeue();
  queue.printQueue();
  print("get first: ");
  print(queue.peek());

  queue.dequeue();
  queue.printQueue();
  print("get first: ");
  print(queue.peek());

  queue.dequeue();
  queue.printQueue();
  queue.dequeue();
  queue.printQueue();
}
