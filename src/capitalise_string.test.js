import capitaliseString from './capitalise_string.js';

test('Capitalise String', () => {
  expect(capitaliseString('hello world')).toBe('Hello world')
  expect(capitaliseString('Hello world')).toBe('not a valid string!')
})
