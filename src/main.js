'use strict';

const matrices = document.getElementsByClassName('flex_item');

let j = 0;
let k = j;
for (let i = 0; i < matrices.length; i++) {
  for (j = 0; j < matrices[i].children.length; j++) {
    matrices[i].children[j].innerHTML = getFibonacciNumber(k);
    k++;
  }
}

function getFibonacciNumber(n) {
  return n <= 1 ? n : getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}
