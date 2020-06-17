"use strict";

let now;

function getTaskA(date) {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  function getHoursName(hour) {
    if (String(hour).charAt(String(hour).length -1) === '1' && hour != 11) {
      return ' час ';
    } else if (String(hour).charAt(String(hour).length -1) === '2' && hour != 12) {
      return ' часа ';
    } else if (String(hour).charAt(String(hour).length -1) === '3' && hour != 13) {
      return ' часа ';
    } else if (String(hour).charAt(String(hour).length -1) === '4' && hour != 14) {
      return ' часа ';
    } else {
      return ' часов ';
    }
  }

  function getMinutesName(minute) {
    if (String(minute).charAt(String(minute).length - 1) === '1' && minute != 11) {
      return ' минута ';
    } else if (String(minute).charAt(String(minute).length - 1) === '2' && minute != 12) {
      return ' минуты ';
    } else if (String(minute).charAt(String(minute).length - 1) === '3' && minute != 13) {
      return ' минуты ';
    } else if (String(minute).charAt(String(minute).length - 1) === '4' && minute != 14) {
      return ' минуты ';
    } else {
      return ' минут ';
    }
  }

  function getSecondsName(seconds) {
    if (String(seconds).charAt(String(seconds).length - 1) === '1' && seconds != 11) {
      return ' секунда';
    } else if (String(seconds).charAt(String(seconds).length - 1) === '2' && seconds != 12) {
      return ' секунды';
    } else if (String(seconds).charAt(String(seconds).length - 1) === '3' && seconds != 13) {
      return ' секунды';
    } else if (String(seconds).charAt(String(seconds).length - 1) === '4' && seconds != 14) {
      return ' секунды';
    } else {
      return ' секунд';
    }
  }

  let hoursName = getHoursName(date.getHours());
  let minutesName = getMinutesName(date.getMinutes());
  let secondsName = getSecondsName(date.getSeconds());

  return 'Сегодня ' + date.toLocaleString('ru', options) + ' ' + date.getFullYear() + ' года, '
          + date.getHours() + hoursName + date.getMinutes() + minutesName + date.getSeconds() + secondsName;
}

function getTaskB(date) {
  function checkNumber(item) {
    if (item <= 9) {
      return '0' + item;
    } 
    return item;
  }

  return checkNumber(date.getDate()) + '.' + checkNumber(date.getMonth() + 1) + '.' + date.getFullYear() + ' - '
        + checkNumber(date.getHours()) + ':' + checkNumber(date.getMinutes()) + ':' + checkNumber(date.getSeconds());
}

let taskA = document.createElement('p');
document.body.appendChild(taskA);

let taskB = document.createElement('p');
document.body.appendChild(taskB);

setInterval(function() {
  now = new Date();
  taskA.innerHTML = getTaskA(now);
  taskB.innerHTML = getTaskB(now);
}, 1000)