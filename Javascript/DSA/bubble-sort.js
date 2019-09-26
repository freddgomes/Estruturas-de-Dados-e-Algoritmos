"use strict";

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }
}

function swap(array, prev, next){
    const temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}

function swapES6(array, prev, next) {
    [array[prev], array[next]] = [array[next], array[prev]];
}

let array = [];

for (let i = 0; i < 100; i++) {
    array[i] = parseInt(Math.random() * (100 - 1) + i);
}

console.log(array);
bubbleSort(array);
console.log(array);