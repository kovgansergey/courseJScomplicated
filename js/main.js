'use strict';

const body = document.querySelector('body');
const colorName = document.getElementById('color');
const changeBtn = document.getElementById('change');
let r;
let g;
let b;
let color;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getXNumber() {
  let newColor;
  newColor = getRandomInt(256);
  newColor = newColor.toString(16);

  if (newColor.length === 1) {
    newColor = '0' + newColor;
  }

  return newColor;
}

changeBtn.addEventListener('click', function() {
  r = getXNumber();
  g = getXNumber();
  b = getXNumber();
  
  color = '#' + r + g + b;

  colorName.textContent = color;
  body.style.backgroundColor = color;
  changeBtn.style.color = color;
});