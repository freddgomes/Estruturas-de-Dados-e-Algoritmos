function Queue() {
    let items = [];
    this.enqueue = function (element) {
        items.push(element);
    }
    this.dequeue = function () {
        return items.shift();
    }
    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
}

let queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(1)
queue.enqueue(6)
queue.enqueue(8)
queue.print()
console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.size())
queue.dequeue()
queue.print()
console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.size())
queue.dequeue()
queue.print()
