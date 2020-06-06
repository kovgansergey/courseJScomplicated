"use strict";

let num = 266219;
let arr = num.toString().split('');
let multiplication = 1;

arr.forEach(function(item) {
  multiplication *= item;
});

console.log('Произведение цифр числа: ', multiplication);

multiplication **= 3;

alert(multiplication.toString().substring(0, 2));