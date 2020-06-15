"use strict";

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();

for (let i = 0; i < week.length; i++) {
  let day = document.createElement('p');
  day.innerHTML = week[i];
  document.body.appendChild(day);

  if (i === 0 || i === 6) {
    day.style.fontStyle = 'italic';
  }

  if (i === date.getDay()) {
    day.style.fontWeight = 'bold';
  }
}