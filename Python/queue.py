import json

class Queue():
    def __init__(self):
        self.items = []
    
    def isEmpty(self):
        return self.items == []
    
    def enqueue(self, item):
        self.items.insert(0, item)
    
    def dequeue(self):
        if not self.isEmpty():
            return self.items.pop()
        else:
            raise Exception('Queue is empty!')
    
    def size(self):
        return len(self.items)
    
    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        else:
            raise Exception('Queue is empty!')
    
    def toJson(self):
        return json.dumps(list(reversed(self.items)))

def main():
    queue = Queue()
    queue.enqueue('dog')
    queue.enqueue('cat')
    queue.enqueue('mouse')
    print(queue.peek())
    print(queue.size())
    print(queue.toJson())
    print(queue.dequeue())
    print(queue.toJson())
    print(queue.dequeue())
    print(queue.peek())
    print(queue.toJson())

if __name__ == "__main__":
    main()      