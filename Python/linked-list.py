class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    def add(self, value):
        temp = self.head
        node = Node(value)
        node.next = temp
        self.head = node
        self.length += 1

    def addLast(self, value):
        if self.head == None:
            self.head = Node(value)
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = Node(value)
        self.length += 1


    def deleteFirst(self):
        temp = self.head.next
        self.head = temp
        self.length -= 1

    def delete(self, index):
        prev = None
        node = self.head
        i = 0
        while node and i < index:
            prev = node
            node = node.next
            i += 1
        if index == i:
            self.length -= 1
            if prev == None:
                self.head = node.next
            else:
                prev.next = node.next
        else:
                raise Exception('Index not found')

    def printList(self):
        node = self.head
        items = ''
        while node:
            items += str(node.value) + '->'
            node = node.next 
        print(items)
    
def main():
    list = LinkedList()
    list.add(9)
    list.printList()
    list.add(1)
    list.add(8)
    list.add(5)
    list.printList()
    list.addLast(10)
    list.add(7)
    list.addLast(12)
    list.printList()
    list.deleteFirst()
    list.printList()
    list.deleteFirst()
    list.printList()
    list.delete(2)
    list.add(28)
    list.add(15)
    list.printList()
    list.delete(5)
    list.printList()

if __name__ == "__main__":
    main()

