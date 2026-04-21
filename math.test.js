const { add, multiply, isOdd } = require('./math');

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('checks if number is odd', () => {
  expect(isOdd(3)).toBe(true);
  expect(isOdd(4)).toBe(false);
});