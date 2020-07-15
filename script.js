document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const select = document.getElementById('cars'),
    output = document.getElementById('output');

  const outputCars = (data) => {
    data.cars.forEach(item => {
      if (item.brand === select.value) {
        const {
          brand,
          model,
          price
        } = item;
        output.innerHTML = `Тачка ${brand} ${model} <br>
            Цена: ${price}$`;
      }
    });
  };

  const getCars = () => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', './cars.json');
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject(request.status);
        }
      });
      request.send();
    });
  };

  select.addEventListener('change', () => {
    getCars()
      .then(outputCars)
      .catch(error => {
        output.innerHTML = 'Произошла ошибка';
        console.error(error);
      });
  });
});