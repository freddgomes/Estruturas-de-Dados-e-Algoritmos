"use strict";

let Node = function (element) {
    this.element = element;
    this.next = null;
}

let TNode = function(element) {
    this.element = element;
    this.left = null;
    this.right = null;
}
module.exports = { Node, TNode};