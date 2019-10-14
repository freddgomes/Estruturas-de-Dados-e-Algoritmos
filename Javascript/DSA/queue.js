function Queue() {
    var items = [];

    this.enqueue = function(element){
        items.push(element);
    }

    this.dequeue = function(element) {
        items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

let queue = new Queue();

queue.enqueue("Cat");
queue.enqueue("Dog");
queue.enqueue("Shark");
queue.print();
queue.dequeue();
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.print();
queue.dequeue();
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.clear();
queue.print();
console.log(queue.size());