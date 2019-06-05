'use strict';

const matrices = document.getElementsByClassName('flex_item');

let j = 1;
let k = j;
for (let i = 0; i < matrices.length; i++) {
  for (j = 1; j < matrices[i].children.length + 1; j++) {
    matrices[i].children[j - 1].innerHTML = getFibonacciNumber(k);
    k++;
  }
}

function getFibonacciNumber(n) {
  return n <= 1 ? n : getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}
