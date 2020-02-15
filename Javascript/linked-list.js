function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element);
        let current = null;
        if (head === null) {
            head = node;
        }
        else{
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
            current = head,
            previous,
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
            length++;
            return true;
        }
        else {
            return false;
        }
    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
            previous,
            index = 0;

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
        }
        else {
            return null;
        }
    }
    this.remove = function (element) {
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    this.isEmpty = function () {
      return length === 0;  
    }
    this.size = function () {
        return length;
    }
    this.getHead = function () {
        return head;
    }
    this.toString = function () {
        let current = head;
        string = '';
        while (current) {
            string += current.element + (current.next ? '->' : ' ');
            current = current.next;
        }
     return string; 
    }
}

let list = new LinkedList();
console.log(list.toString())
list.append(8);
list.append(2);
list.append(3);
list.append(12);
console.log(list.toString());
list.append(6);
list.insert(3, 4);
console.log(list.toString());
list.append(1);
list.insert(0, 9);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
list.remove(12);
console.log(list.toString());
list.remove(22);
console.log(list.toString());
list.remove(1);
console.log(list.toString());
list.remove(22);
console.log(list.isEmpty());
console.log(list.size());
console.log(list.getHead());