"use strict"

let { Node } = require("./node");

function LinkedList() {
    let node = Node;

    let length = 0;
    let head = null;

    this.append = function(element){ 
        let node = new Node(element);

        if (head == null) {
            head = node;
        }
        else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
     }

    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            current = head;
            previous = null;
            index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
        }
    }
    this.removeAt = function(position){
        if (position > -1 && position < length) {
            let current = head;
            let previous = null;
            let index = 0;

            if (position === 0) {
                head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
    this.remove = function(element) {}
    this.indexOf  = function(element) {}
    this.isEmpty = function() {}
    this.size = function() { return length; }
    
    this.toString = function() { 
        let current = head;
        let string = '';
        while (current) {
            string = current.element + ' -> ' + string;
            current = current.next;
        }
        return string;
    }
    this.print = function() { console.log(this.toString())}   
}

let list = new LinkedList();
console.log(list.size());
list.append(99);
list.append(22);
list.print();