"use strict";

function test(data) {
  if (typeof data != 'string') {
    return 'Аргумент - не является строкой';
  }

  data = data.trim();

  if (data.length > 30) {
    data = data.slice(0, 30) + '...';
  }

  return data;
}

console.log(test('            1234567890123456789012345678901        '));