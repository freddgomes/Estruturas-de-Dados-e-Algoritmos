class Node<T> {
  T value;
  Node<T> next;

  Node(T value) {
    this.value = value;
  }

  Map<String, dynamic> toJson() => _nodeToJson(this);

  Map<String, dynamic> _nodeToJson(Node instance) => <String, dynamic>{
        'value': instance.value,
        'next': instance.next?.toJson(),
      };
}

class LinkedList<T> {
  Node<T> head;
  int length = 0;

  Node<T> add(T value) {
    if (this.head == null) {
      this.head = new Node(value);
      this.length++;
      return this.head;
    }

    var node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new Node(value);
    this.length++;
    return node.next;
  }

  void insert(T value, int index) {
    if (index >= 0 && index <= this.length) {
      var node = new Node<T>(value);
      if (index == 0) {
        var current = this.head;
        node.next = current;
        this.head = node;
      } else {
        var previous = this.getElementAt(index - 1);
        var current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.length++;
    }
  }

  void removeAt(int index) {
    if (index >= 0 && index < this.length) {
      var currentNode = this.head;
      if (index == 0) {
        this.head = currentNode.next;
      } else {
        Node previous;
        for (var i = 0; i < index; i++) {
          previous = currentNode;
          currentNode = currentNode.next;
        }
        previous.next = currentNode.next;
      }
      this.length--;
    }
  }

  void remove(T value) {
    var index = this.indexOf(value);
    this.removeAt(index);
  }

  int indexOf(T value) {
    var current = this.head;
    for (var i = 0; i < this.length && current != null; i++) {
      if (current.value == value) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  Node<T> getElementAt(int index) {
    if (index >= 0 && index <= this.length) {
      Node<T> node = this.head;
      for (var i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  }

  int getLength() {
    return this.length;
  }

  void printList() {
    print(this.head?.toJson());
  }
}

void main(List<String> args) {
  LinkedList<int> list = new LinkedList();
  list.add(9);
  list.add(4);
  list.add(7);
  list.add(3);
  list.add(29);
  list.add(14);
  list.printList();
  print(list.getLength());
  list.removeAt(2);
  list.printList();
  print(list.getLength());
  list.removeAt(4);
  list.printList();
  print(list.getLength());
  list.removeAt(-1);
  list.printList();
  print(list.getLength());
  list.removeAt(0);
  list.printList();
  print(list.getLength());
  print("get element by index 0: ");
  print(list.getElementAt(0).toJson());
  print("get element by index 2: ");
  print(list.getElementAt(2).toJson());
  print("insert element at index 1");
  list.insert(77, 1);
  list.printList();
  list.add(1);
  list.printList();
  print("get index by value: 77");
  print(list.indexOf(77));
  print("get index by value: 17");
  print(list.indexOf(17));
  print("remove element 29");
  list.remove(29);
  list.printList();
  print("remove element 9");
  list.remove(9);
  list.printList();
}
