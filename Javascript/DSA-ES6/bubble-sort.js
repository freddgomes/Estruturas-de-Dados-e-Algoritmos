"use strict";

//A ordenação por bolha (bubble sort) é um algoritmo de classificação simples. 
//Esse algoritmo de classificação é um algoritmo baseado em comparação,
//no qual cada par de elementos adjacentes é comparado 
//e os elementos são trocados se não estiverem em ordem. 
//Esse algoritmo não é adequado para grandes conjuntos de dados,
//pois sua complexidade média e no pior caso são de Ο(n2) em que n é o número de itens.

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