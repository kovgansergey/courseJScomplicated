"use strict";

// Задача 1

let arr = ['51865118', '2489651', '9575124', '75496521', '415683210', '21684416', '668767016'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  } else {
    continue;
  }
}

// Задача 2

let num;

for (let i = 1; i <= 100; i++) {
  num = 0;

  for (let j = 1; j <= i; j++) {
    if (Number.isInteger(i / j)) {
      num++;
    }
  }
  
  if (num <= 2) {
    console.log(i + ' Делители этого числа: 1 и ' + i);
  } else {
    continue;
  }
}