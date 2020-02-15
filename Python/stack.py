import json

class Stack():
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.isEmpty():
            return self.items.pop()
        else:
            raise Exception('stack is empty!')

    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        else:
            raise Exception('stack is empty!')
        
    def size(self):
        if not self.isEmpty():
            return len(self.items)
        else:
            raise Exception('stack is empty!')   

    def toJson(self):
        return json.dumps(self.items)

def main():
    stack = Stack()
    stack.push(22)
    stack.push(44)
    stack.push(93)
    print(stack.size())
    print(stack.toJson())
    print(stack.pop())
    print(stack.size())
    print(stack.toJson())
    print(stack.pop())
    print(stack.toJson())
    print(stack.size())
    print(stack.pop())
    print(stack.toJson())

if __name__ == "__main__":
    main()