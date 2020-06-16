"use strict";

let now = new Date();


function getTaskA(date) {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  return 'Сегодня ' + date.toLocaleString('ru', options) + ' ' + date.getFullYear() + 'года, ' + 
}


let taskA = document.createElement('p');
taskA.innerHTML = ;
document.body.appendChild(taskA);