"use strict";

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let today;

if (date.getDay() === 0) {
  today = 6;
} else {
  today = date.getDay() - 1;
}

for (let i = 0; i < week.length; i++) {
  let day = document.createElement('p');
  day.innerHTML = week[i];
  document.body.appendChild(day);

  if (i === 5 || i === 6) {
    day.style.fontStyle = 'italic';
  }

  if (i === today) {
    day.style.fontWeight = 'bold';
  }
}