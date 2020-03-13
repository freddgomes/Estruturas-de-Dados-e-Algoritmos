const array = require('./array-stack');

const stack = new array();
stack.push(2);
stack.push(7);
stack.push(22);
stack.push(3);
stack.push(6);
stack.push(14);
stack.display();
console.log(stack.pop());
stack.display();
console.log(stack.pop());
stack.display();