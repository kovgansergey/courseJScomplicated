'use strict';

const animateBtn = document.querySelector('#animate');
const resetBtn = document.querySelector('#reset');
const ball = document.querySelector('.ball');
let coin = 900;
let animate = false;
let requestId;

function powerAnimate() {
  requestId = requestAnimationFrame(function ballAnimate() {
    ball.style.right = coin + 'px';
    ball.style.top = (90000 / coin) + 'px';
    
    if (animate) {
      if (coin > 140) {
        coin -= 10;
        requestAnimationFrame(ballAnimate);
      }
    } else {
      cancelAnimationFrame(requestId);
    }
  });
}

animateBtn.addEventListener('click', () => {
  animate = !animate;
  powerAnimate();
});

resetBtn.addEventListener('click', () => {
  coin = 900;
  animate = false;
  powerAnimate();
});