class ArrayStack {
    constructor() {
        this.array = [];
        this.count = 0;
    }

    push(item) {
        this.array[this.count] = item;
        this.count++;
    }
    pop() {
        return this.array[--this.count];
    }
    display() {
        console.log(this.array);
    }
}
module.exports = ArrayStack;
