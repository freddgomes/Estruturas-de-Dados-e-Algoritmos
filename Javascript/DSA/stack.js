"use strict"

function Stack() {
    var items = [];

    this.push = function(element) {
        items.push(element);
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }
    this.clear = function() {
        items = [];
    }

    this.print = function() {
        console.log(items.toString());
    }
}

let stack = new Stack();

stack.push(2);
stack.push(88);
stack.push(21);
stack.push(5);
stack.push(2);
stack.push(56);
stack.print();
console.log(stack.size());
console.log(stack.pop());
stack.print();
console.log(stack.isEmpty());
console.log(stack.pop());
stack.print();
console.log(stack.isEmpty());
stack.clear();
console.log(stack.size());