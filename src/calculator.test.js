import calculator from './calculator.js';

test('add two numbers', () => {
  expect(calculator.add(5, 10)).toBe(15);
})

test('subtract two numbers', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
})

test('multiply two numbers', () => {
  expect(calculator.multiply(10, 5)).toBe(50);
})

test('divide two numbers', () => {
  expect(calculator.divide(10, 5)).toBe(2);
})
