"use strict";

// Задача 1

let lang = prompt('Введите язык: ru или en');
let ruDays = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let enDays = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

console.log('Решение a');
if (lang === 'ru') {
  console.log(ruDays);
} else if (lang === 'en') {
  console.log(enDays);
} else {
  console.log('Вы ввели некоректный язык');
}

console.log('Решение b');
switch (lang) {
  case 'ru':
    console.log(ruDays);
    break;
  case 'en':
    console.log(enDays);
    break;
  default:
    console.log('Вы ввели некоректный язык');
}

console.log('Решение c');
let arr = [];
arr[101110] = enDays;
arr[114117] = ruDays;
console.log(arr[Number(String(lang.charCodeAt(0)) + String(lang.charCodeAt(1)))]);

// Задача 2

let namePerson = prompt('Введите имя');
let result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(result);