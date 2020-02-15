function Stack() {
    let items = [];

    this.push = function (element) {
        items.push(element);
    }
    this.pop = function () {
        items.pop()
    }
    this.peek = function () {
        return items[items.length - 1];
    }
    this.size = function () {
        return items.length;
    }
    this.clear = function () {
        items = [];
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.print = function () {
        console.log(items.toString());
    }
}

let stack = new Stack();
stack.push(1)
stack.push(3)
stack.push(9)
stack.print()
stack.push(5)
stack.push(22)
stack.print()
stack.pop()
stack.print()
stack.isEmpty()
console.log(stack.peek())
console.log(stack.size())
stack.pop()
stack.print()
stack.isEmpty()
console.log(stack.peek())
console.log(stack.size())

